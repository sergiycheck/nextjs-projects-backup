import { Argon2id } from "oslo/password";

const argon2id = new Argon2id();

const verifyData = async (hash: string, data: string) => {
  return argon2id.verify(hash, data);
};

const hashData = async (data: string) => argon2id.hash(data);

export { verifyData, hashData };
