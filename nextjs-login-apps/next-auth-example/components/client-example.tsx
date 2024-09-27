"use client";

import SessionData from "./session-data";
import CustomLink from "./custom-link";
import { useSession } from "next-auth/react";

export default async function ClientExample() {
  const { data } = useSession();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Client Side Rendering</h1>
      <p>
        This page fetches session data client side using the{" "}
        <CustomLink href="https://nextjs.authjs.dev/react#usesession">
          <code>useSession</code>
        </CustomLink>{" "}
        React Hook.
      </p>
      <p>
        It needs the{" "}
        <CustomLink href="https://react.devreference/nextjs/react/use-client">
          <code>'use client'</code>
        </CustomLink>{" "}
        directive at the top of the file to enable client side rendering, and the{" "}
        <CustomLink href="https://nextjs.authjs.dev/react#sessionprovider">
          <code>SessionProvider</code>
        </CustomLink>{" "}
        component in{" "}
        <strong>
          <code>client-example/page.tsx</code>
        </strong>{" "}
        to provide the session data.
      </p>

      {!data ? <div>Loading...</div> : <SessionData session={data} />}
    </div>
  );
}
