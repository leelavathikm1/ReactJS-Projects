import { createContext } from "react";

const userContext = createContext(); //this will help to send data from one place and receive in another place

export const UserContextProvider = userContext.Provider;
export const UserContextConsumer = userContext.Consumer;
