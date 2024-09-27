import { generateOpenApiDocument } from "trpc-openapi";

import { appRouter } from "./index";

/* 👇 */
export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "tRPC OpenAPI",
  version: "1.0.0",
  baseUrl: "http://localhost:3000/api/trpc/openapi",
});
