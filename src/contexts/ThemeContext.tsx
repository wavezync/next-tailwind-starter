import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Themes = "light" | "dark";

export interface ThemeContextType {
  setTheme: (theme: Themes) => void;
  theme?: Themes;
}

// Create the context
export const ThemeContext = createContext<ThemeContextType>({
  setTheme: () => {},
});

// Create the provider
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeValue, setThemeValue] = useState<Themes>("dark");

  const setTheme = useCallback((theme: Themes) => {
    setThemeValue(theme);
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, []);

  const contextValue = useMemo(
    () => ({ setTheme, theme: themeValue }),
    [setTheme, themeValue],
  );

  useEffect(() => {
    const theme = localStorage.getItem("theme") as Themes;
    if (theme) {
      setTheme(theme);
    }

    // or load the theme based on the user's preferences
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    if (theme === "dark" && !prefersDark.matches) {
      setTheme("light");
    }
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
