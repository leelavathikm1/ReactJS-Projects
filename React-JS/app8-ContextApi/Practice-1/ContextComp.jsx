import { createContext } from "react";

const userAccess = createContext();

export const UserAccessProvider = userAccess.Provider;

export const UserAccessConsumer = userAccess.Consumer;
