import { createContext } from "react";

const endUserMessage = createContext();

export const EndUserMessageProvider = endUserMessage.Provider;
export const EndUserMessageConsumenr = endUserMessage.Consumer;
