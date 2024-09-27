import { validateRequest } from "@/lib/auth";
import { Form } from "@/components/form";
import { redirect } from "next/navigation";

import type { ActionResult } from "@/components/form";
import { createBlankSessionCookie, invalidateSession } from "@/lib/services/lucia-cookie.service";

export default async function Page() {
  const { user } = await validateRequest();

  if (!user) {
    return redirect("/signin");
  }
  return (
    <div className="h-full flex justify-center items-center">
      <div className="flex space-y-2 flex-col">
        <h1>Hi, {user.username}!</h1>
        <p>Your user ID is {user.id}.</p>
        <Form action={logout}>
          <button>Sign out</button>
        </Form>
      </div>
    </div>
  );
}

async function logout(): Promise<ActionResult> {
  "use server";
  debugger;

  const { session } = await validateRequest();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  await invalidateSession(session.id);
  createBlankSessionCookie();

  return redirect("/signin");
}
