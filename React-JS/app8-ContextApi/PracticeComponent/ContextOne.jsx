import { createContext } from "react";

const userContext = createContext();

const UserContextProvider = userContext.Provider;

const UserContextConsumer = userContext.Consumer;
