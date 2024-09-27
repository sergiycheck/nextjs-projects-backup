import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/better-sqlite3";
import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import Database from "better-sqlite3";
import { z } from "zod";

import { publicProcedure, router } from "./trpc";

import { todos } from "@/db/schema";

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);

migrate(db, { migrationsFolder: "drizzle" });

export const appRouter = router({
  getTodos: publicProcedure
    .meta({ openapi: { method: "GET", path: "/getTodos" } })
    .query(async () => {
      return await db.select().from(todos).all();
    }),
  addTodo: publicProcedure
    .meta({ openapi: { method: "POST", path: "/addTodo" } })
    .input(z.string())
    .output(z.boolean())
    .mutation(async (opts) => {
      await db.insert(todos).values({ content: opts.input, done: 0 }).run();
      return true;
    }),
  setDone: publicProcedure
    .meta({ openapi: { method: "POST", path: "/setDone" } })
    .input(
      z.object({
        id: z.number(),
        done: z.number(),
      })
    )
    .output(z.boolean())
    .mutation(async (opts) => {
      await db
        .update(todos)
        .set({ done: opts.input.done })
        .where(eq(todos.id, opts.input.id))
        .run();
      return true;
    }),
});

export type AppRouter = typeof appRouter;
