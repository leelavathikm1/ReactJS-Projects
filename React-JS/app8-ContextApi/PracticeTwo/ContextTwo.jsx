import { createContext } from "react";

const peopleContext = createContext();

export const PeopleContextProvider = peopleContext.Provider;
export const PeopleContextConsumer = peopleContext.Consumer;
