import { initTRPC } from "@trpc/server";
import { OpenApiMeta } from "trpc-openapi";

const t = initTRPC.meta<OpenApiMeta>().create();

export const router = t.router;
export const publicProcedure = t.procedure;
