import { DatabaseSession, Session, generateId } from "lucia";
import { db } from "@/lib/db";

const createDbSession = async (data: Session) => {
  const { userId, expiresAt } = data;
  const expires_at = new Date(expiresAt).getTime();
  const id = generateId(15);
  db.prepare("INSERT INTO session (id, expires_at, user_id) VALUES(?, ?, ?)").run(
    id,
    expires_at,
    userId
  );

  return { id, expiresAt, userId };
};

const updateDbSession = async (data: Session) => {
  const { userId, expiresAt, id } = data;
  const expires_at = new Date(expiresAt).getTime();
  db.prepare("UPDATE session SET expires_at = ?, user_id = ? WHERE id = ?").run(
    expires_at,
    userId,
    id
  );

  return { id, expiresAt, userId };
};

const getSessionById = async (id: string) => {
  return db.prepare("SELECT * FROM session WHERE id = ?").get(id) as DatabaseSession | undefined;
};

const deleteSessionById = async (id: string) => {
  db.prepare("DELETE FROM session WHERE id = ?").run(id);
};

export { createDbSession, getSessionById, deleteSessionById, updateDbSession };
