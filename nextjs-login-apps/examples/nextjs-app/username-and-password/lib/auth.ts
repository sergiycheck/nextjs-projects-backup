import { Lucia } from "lucia";
import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";
import { db } from "./db";
import { cache } from "react";

import type { Session, User } from "lucia";
import type { DatabaseUser } from "./db";
import {
  createAndSetCookie,
  createBlankSessionCookie,
  getSessionId,
  validateSession,
} from "./services/lucia-cookie.service";

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
    debugger;

    const sessionId = getSessionId();

    if (!sessionId) {
      return {
        user: null,
        session: null,
      };
    }

    const result = await validateSession(sessionId);

    // next.js throws when you attempt to set cookie when rendering page
    try {
      if (result.session && result.session.fresh) {
        createAndSetCookie(result.session.id);
      }
      if (!result.session) {
        createBlankSessionCookie();
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
