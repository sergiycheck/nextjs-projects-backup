export const validateAuthForm = ({
  username,
  password,
}: {
  username: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}) => {
  if (
    typeof username !== "string" ||
    username.length < 3 ||
    username.length > 31 ||
    !/^[a-zA-Z0-9_-]+$/.test(username)
  ) {
    return {
      error: "Invalid username",
    };
  }
  if (typeof password !== "string" || password.length < 6 || password.length > 255) {
    return {
      error: "Invalid password",
    };
  }

  return {
    error: null,
  };
};
