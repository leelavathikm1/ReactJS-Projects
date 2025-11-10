import { createContext } from "react";

const dataAccess = createContext();

export const DataAccessProvider = dataAccess.Provider;

export const DataAccessConsumer = dataAccess.Consumer;
