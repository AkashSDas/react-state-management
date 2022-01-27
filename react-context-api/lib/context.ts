import { createContext, Dispatch, SetStateAction } from "react";

export const ThemeContext = createContext(null);
export const ThemeContext2 = createContext<{
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  toggleTheme: () => {};
}>({
  theme: "light",
  setTheme: null,
  toggleTheme: null,
});
