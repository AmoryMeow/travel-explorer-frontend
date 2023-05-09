import { createContext, useContext, type ReactNode } from "react";
import { type User } from "./types";

const UserContext = createContext<User | undefined>(undefined);

export const UserContextProvider = ({
  value,
  children,
}: {
  value?: User;
  children: ReactNode;
}) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useCurrentUser = () => useContext(UserContext);
