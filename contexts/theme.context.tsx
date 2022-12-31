import { useEffect, createContext, useState, FC, ReactNode } from "react";

export type ThemeType = "red" | "green";
export type ThemeContextType = {
  theme: ThemeType;
  setTheme: (arg: ThemeType) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "green",
  setTheme: (arg: ThemeType) => {},
});

type ThemeContextProviderType = {
  children: ReactNode;
};

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderType) => {
  const [theme, setTheme] = useState<ThemeType>("green");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
