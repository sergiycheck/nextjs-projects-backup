import { db } from "@/lib/db";
import type { DatabaseUser } from "@/lib/db";
import { hashData } from "./argon.service";
import { generateId } from "lucia";

const getUserByUsername = async (username: string) => {
  return db.prepare("SELECT * FROM user WHERE username = ?").get(username) as
    | DatabaseUser
    | undefined;
};

const createUser = async (data: { username: string; password: string }) => {
  const { username, password } = data;

  const hashedPassword = await hashData(password);
  const userId = generateId(15);

  db.prepare("INSERT INTO user (id, username, password) VALUES(?, ?, ?)").run(
    userId,
    username,
    hashedPassword
  );

  return { id: userId, username, password: hashedPassword };
};

export { getUserByUsername, createUser };
