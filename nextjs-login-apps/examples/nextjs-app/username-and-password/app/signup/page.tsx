import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import { SqliteError } from "better-sqlite3";

import type { ActionResult } from "@/components/form";
import { AuthForm } from "@/components/auth-form";
import { validateAuthForm } from "@/lib/validation";
import { createUser } from "@/lib/services/user.service";
import { createAndSetCookie, createSession } from "@/lib/services/lucia-cookie.service";

export default async function Page() {
  const { user } = await validateRequest();
  if (user) {
    return redirect("/");
  }
  return (
    <>
      <AuthForm
        action={signup}
        formFields={{
          header: "Sign up",
          linkData: {
            href: "/signin",
            text: "Sign in",
          },
        }}
      />
    </>
  );
}

async function signup(_: any, formData: FormData): Promise<ActionResult> {
  "use server";
  debugger;
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const validationResult = validateAuthForm({ username, password });
  if (validationResult.error) {
    return validationResult;
  }

  try {
    const user = await createUser({
      username,
      password,
    });

    const session = await createSession(user.id);
    createAndSetCookie(session.id);
  } catch (e) {
    if (e instanceof SqliteError && e.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return {
        error: "Username already used",
      };
    }

    return {
      error: "An unknown error occurred",
    };
  }
  return redirect("/");
}
