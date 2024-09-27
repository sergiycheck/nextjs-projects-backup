import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter } from "@/server";
//TODO: integrate open api docs
//https://www.npmjs.com/package/trpc-openapi
import { createOpenApiHttpHandler } from "trpc-openapi";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };
