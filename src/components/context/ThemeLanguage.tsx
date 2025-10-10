"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface ThemeContextType {
  theme: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
  languege: boolean;
  setLanguege: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(false);
  const [languege, setLanguege] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const storedLanguege = localStorage.getItem("languege");

    if (storedTheme !== null) setTheme(storedTheme === "true");
    if (storedLanguege !== null) setLanguege(storedLanguege !== "false");

    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) localStorage.setItem("theme", theme.toString());
  }, [theme, mounted]);

  useEffect(() => {
    if (mounted) localStorage.setItem("languege", languege.toString());
  }, [languege, mounted]);

  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, languege, setLanguege }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext нь ThemeProvider дотор хэрэглэгдэх ёстой!"
    );
  }
  return context;
}
