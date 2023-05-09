import { type User } from "./types";

export const getUserByToken = () => {
  const token = localStorage.getItem("token");

  if (checkToken(token)) {
    return { data: { id: "1", login: token } as User };
  } else {
    localStorage.removeItem("token");

    return { data: undefined };
  }
};

const checkToken = (token: string | null) => {
  return token ? true : false;
};
