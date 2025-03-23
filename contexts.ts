import { createContext } from "react";
import { CounterContext } from "./types";

export const AppCounterContext = createContext<CounterContext | null>(null);
