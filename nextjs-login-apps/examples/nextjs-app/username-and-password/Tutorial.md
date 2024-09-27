### Tutorial

Create nextjs app

```bash
npx create-next-app@latest username-password
cd username-password
```

Install the required dependencies

```bash
npm install @lucia-auth/adapter-sqlite better-sqlite3 lucia oslo
```

Install dev dependencies

```bash
npm install --save-dev @types/better-sqlite3
```

configure tailwindcss for next.js project

configure globals.css file

app/globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html,
body {
  height: 100%;
}

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground-rgb: 255, 255, 255;
    --background-start-rgb: 0, 0, 0;
    --background-end-rgb: 0, 0, 0;
  }
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(to bottom, transparent, rgb(var(--background-end-rgb))) rgb(
      var(--background-start-rgb)
    );
}
```

import this file in layout.tsx file

### debugging config

add .vscode folder with launch.json file
.vscode/lanch.json

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Next.js",
      "runtimeExecutable": "pnpm",
      "runtimeArgs": ["run", "dev"],
      "console": "integratedTerminal"
    }
  ]
}
```

### page file

Replace page.tsx with the following code

```tsx
<main className="flex min-h-screen flex-col items-center justify-between p-24">
  <h1 className="text-4xl font-bold">Auth lucia example</h1>
</main>
```

### components folder

create components folder and add form-components.tsx file with styled tailwindcss components to make it better

components/form-components.tsx

```tsx
export const Label = ({ children, htmlFor }: { children: string; htmlFor: string }) => (
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor={htmlFor}>
    {children}
  </label>
);

export const Input = ({
  type,
  name,
  id,
  placeholder,
}: {
  type: string;
  name: string;
  id: string;
  placeholder: string;
}) => (
  <input
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
      block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder={placeholder}
    name={name}
    id={id}
    type={type}
  />
);

export const Button = ({ children }: { children: string }) => (
  <button
    className="text-white bg-blue-700 hover:bg-blue-800 
      focus:ring-4 focus:outline-none focus:ring-blue-300 
      font-medium rounded-lg text-sm w-full sm:w-auto px-5 
      py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    {children}
  </button>
);
```

create form.tsx file in lib folder

components/form.tsx

```tsx
"use client";

import { useFormState } from "react-dom";

export function Form({
  children,
  action,
}: {
  children: React.ReactNode;
  action: (prevState: any, formData: FormData) => Promise<ActionResult>;
}) {
  const [state, formAction] = useFormState(action, {
    error: null,
  });
  return (
    <form className="max-w-sm mx-auto" action={formAction}>
      {children}
      <p className="text-xm text-red-600">{state.error}</p>
    </form>
  );
}

export interface ActionResult {
  error: string | null;
}
```

we use useFormState hook to track form state and use server side action to handle form submission

create auth-form.tsx in the components folder

components/auth-form.tsx

```tsx
import { Label, Input, Button } from "@/components/form-components";
import { Form } from "@/components/form";
import Link from "next/link";
import type { ActionResult } from "@/components/form";

export const AuthForm = ({
  action,
  formFields,
}: {
  action: (prevState: any, formData: FormData) => Promise<ActionResult>;
  formFields: {
    header: string;
    linkData: {
      href: string;
      text: string;
    };
  };
}) => {
  return (
    <div className="grid sm:grid-cols-3 sm:grid-rows-3 h-full">
      <div className="wrapper col-span-1 col-start-2 row-start-2">
        <h1 className="text-4xl">{formFields.header}</h1>
        <Form action={action}>
          <div className="sy-5">
            <Label htmlFor="username">Username</Label>
            <Input type="text" name="username" id="username" placeholder="" />
          </div>

          <div className="sy-5">
            <Label htmlFor="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="" />
          </div>

          <div className="mt-5 flex sm:justify-between items-end">
            <Link href={formFields.linkData.href}>{formFields.linkData.text}</Link>
            <Button>Continue</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
```

We use AuthForm component for signin and signup pages and reuse markup

### lib folder

In order to preview sqlite database we use sqlite viewer extension in vscode

Create lib folder and add db.ts file
Create sqlite database schemas for user and session tables

lib/db.ts

```tsx
import sqlite from "better-sqlite3";

export const db = sqlite("main.db");

db.exec(`CREATE TABLE IF NOT EXISTS user (
    id TEXT NOT NULL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
)`);

db.exec(`CREATE TABLE IF NOT EXISTS session (
    id TEXT NOT NULL PRIMARY KEY,
    expires_at INTEGER NOT NULL,
    user_id TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
)`);

export interface DatabaseUser {
  id: string;
  username: string;
  password: string;
}
```

create auth.ts file in lib folder

lib/auth.ts

```tsx
import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import { db } from "./db";
import { cookies } from "next/headers";
import { cache } from "react";

import type { Session, User } from "lucia";
import type { DatabaseUser } from "./db";

const adapter = new BetterSqlite3Adapter(db, {
  user: "user",
  session: "session",
});

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => {
    return {
      username: attributes.username,
    };
  },
});

export const validateRequest = cache(
  async (): Promise<{ user: User; session: Session } | { user: null; session: null }> => {
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;

    if (!sessionId) {
      return {
        user: null,
        session: null,
      };
    }

    const result = await lucia.validateSession(sessionId);
    // next.js throws when you attempt to set cookie when rendering page
    try {
      if (result.session && result.session.fresh) {
        const sessionCookie = lucia.createSessionCookie(result.session.id);
        cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
      }
      if (!result.session) {
        const sessionCookie = lucia.createBlankSessionCookie();
        cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
      }
    } catch {}
    return result;
  }
);

declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: Omit<DatabaseUser, "id">;
  }
}
```

We create database adapter for lucia using @lucia-auth/adapter-sqlite
We create lucia instance with the adapter and set session cookie attributes and use getUserAttributes to get user attributes
We create validateRequest function to validate session and wrap it in cache function to prevent multiple calls when using react server components
and create session cookie
and if session is fresh we create blank session cookie
we augment lucia module to include lucia instance and DatabaseUserAttributes

create validation.ts file in lib folder
lib/validation.ts

```tsx
export const validateAuthForm = ({
  username,
  password,
}: {
  username: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}) => {
  if (
    typeof username !== "string" ||
    username.length < 3 ||
    username.length > 31 ||
    !/^[a-z0-9_-]+$/.test(username)
  ) {
    return {
      error: "Invalid username",
    };
  }
  if (typeof password !== "string" || password.length < 6 || password.length > 255) {
    return {
      error: "Invalid password",
    };
  }

  return {
    error: null,
  };
};
```

we'll use this function to validate username and password for server side actions

### app folder

replace page.tsx with the following code

```tsx
import { lucia, validateRequest } from "@/lib/auth";
import { Form } from "@/lib/form";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import type { ActionResult } from "@/lib/form";

export default async function Page() {
  const { user } = await validateRequest();

  if (!user) {
    return redirect("/signin");
  }
  return (
    <>
      <h1>Hi, {user.username}!</h1>
      <p>Your user ID is {user.id}.</p>
      <Form action={logout}>
        <button>Sign out</button>
      </Form>
    </>
  );
}

async function logout(): Promise<ActionResult> {
  "use server";
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  return redirect("/signin");
}
```

We use validateRequest function to validate session and get user from cookies
if user is not found we redirect to signin page
we use Form component to create signout button and use logout function to invalidate session and redirect to signin page
In logout function we use 'use server' pragma to run server side code and set blank session cookie with further redirect to signin page

### signin page

create signin folder with page.tsx file

signin/page.tsx

```tsx
import { db } from "@/lib/db";
import { Argon2id } from "oslo/password";
import { cookies } from "next/headers";
import { lucia, validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

import type { DatabaseUser } from "@/lib/db";
import type { ActionResult } from "@/components/form";
import { AuthForm } from "@/components/auth-form";
import { validateAuthForm } from "@/lib/validation";

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
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const validationResult = validateAuthForm({ username, password });
  if (validationResult.error) {
    return validationResult;
  }

  const existingUser = db.prepare("SELECT * FROM user WHERE username = ?").get(username) as
    | DatabaseUser
    | undefined;
  if (!existingUser) {
    return {
      error: "Incorrect username or password",
    };
  }

  const validPassword = await new Argon2id().verify(existingUser.password, password);
  if (!validPassword) {
    return {
      error: "Incorrect username or password",
    };
  }

  const session = await lucia.createSession(existingUser.id, {});
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  return redirect("/");
}
```

For Page component we use validateRequest to get user from cookies and redirect to home page if user is found
we reuse AuthForm component for signin page

for login server side action we validate username and password and check if user exists in database
check if password is valid and create session and session cookie and redirect to home page

### signup page

create signup folder with page.tsx file

signup/page.tsx

```tsx
import { db } from "@/lib/db";
import { Argon2id } from "oslo/password";
import { cookies } from "next/headers";
import { lucia, validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Form } from "@/components/form";
import { generateId } from "lucia";
import { SqliteError } from "better-sqlite3";

import type { ActionResult } from "@/components/form";
import { AuthForm } from "@/components/auth-form";
import { validateAuthForm } from "@/lib/validation";

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
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const validationResult = validateAuthForm({ username, password });
  if (validationResult.error) {
    return validationResult;
  }
  const hashedPassword = await new Argon2id().hash(password);
  const userId = generateId(15);

  try {
    db.prepare("INSERT INTO user (id, username, password) VALUES(?, ?, ?)").run(
      userId,
      username,
      hashedPassword
    );

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);

    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
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
```

We are doing similiar to signin page for Page component but change props for AuthForm component

In signup server side action we validate username and password and return an error if validation fails
we hash password and generate user id

in try catch statement we insert user into database and create session and session cookie and redirect to home page
for unique constraint error we return error message if user already exists
the error will be displayed in the form
