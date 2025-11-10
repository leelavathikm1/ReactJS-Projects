import { createContext } from "react";

const userWishes = createContext();

export const UserWishesProvider = userWishes.Provider;

export const UserWishesConsumer = userWishes.Consumer;
