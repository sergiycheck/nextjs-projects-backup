import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

import type { ActionResult } from "@/components/form";
import { AuthForm } from "@/components/auth-form";
import { validateAuthForm } from "@/lib/validation";
import { getUserByUsername } from "@/lib/services/user.service";
import { verifyData } from "@/lib/services/argon.service";
import { createAndSetCookie, createSession } from "@/lib/services/lucia-cookie.service";

export default async function Page() {
  const { user } = await validateRequest();
  if (user) {
    return redirect("/");
  }
  return (
    <AuthForm
      action={login}
      formFields={{
        header: "Sign in",
        linkData: {
          href: "/signup",
          text: "Create an account",
        },
      }}
    />
  );
}

async function login(_: any, formData: FormData): Promise<ActionResult> {
  "use server";
  debugger;
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const validationResult = validateAuthForm({ username, password });
  if (validationResult.error) {
    return validationResult;
  }

  const existingUser = await getUserByUsername(username);

  if (!existingUser) {
    return {
      error: "Incorrect username or password, or no user with this credentials",
    };
  }

  const validPassword = await verifyData(existingUser.password, password);
  if (!validPassword) {
    return {
      error: "Incorrect username or password",
    };
  }

  const session = await createSession(existingUser.id);
  createAndSetCookie(session.id);

  return redirect("/");
}
