import { lucia } from "@/lib/auth";
import { cookies } from "next/headers";

const createSession = async (dataToSetFrom: string) => lucia.createSession(dataToSetFrom, {});

const createAndSetCookie = async (dataToSetFrom: string) => {
  const sessionCookie = lucia.createSessionCookie(dataToSetFrom);
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
};

const getSessionId = () => cookies().get(lucia.sessionCookieName)?.value ?? null;

const validateSession = async (sessionId: string) => lucia.validateSession(sessionId);

const invalidateSession = async (sessionId: string) => lucia.invalidateSession(sessionId);

const createBlankSessionCookie = () => {
  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
};

export {
  createAndSetCookie,
  createSession,
  getSessionId,
  validateSession,
  invalidateSession,
  createBlankSessionCookie,
};
