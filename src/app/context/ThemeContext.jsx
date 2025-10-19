"use client";
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(undefined);

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ff4d6d",
      light: "#ff85a2",
      dark: "#c70039",
      contrastText: "#fff",
    },
    secondary: {
      main: "#4cd964",
      light: "#8ef293",
      dark: "#229c3f",
      contrastText: "#000",
    },
    background: {
      default: "#fff0f5",
      paper: "#ffe6ed",
    },
    text: {
      primary: "#222222",
      secondary: "#555555",
    },
  },
  typography: {
    fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
    h1: { fontWeight: 700, fontSize: "2.75rem" },
    h2: { fontWeight: 600, fontSize: "2.25rem" },
    h3: { fontWeight: 500, fontSize: "2rem" },
    h4: { fontWeight: 500, fontSize: "1.75rem" },
    h5: { fontWeight: 500, fontSize: "1.5rem" },
    h6: { fontWeight: 500, fontSize: "1.25rem" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 4,
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff2a55",
      light: "#ff5c7f",
      dark: "#b70033",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2ecc71",
      light: "#58d68d",
      dark: "#1c7a44",
      contrastText: "#fff",
    },
    background: {
      default: "#1e0f12",
      paper: "#2c0d1b",
    },
    text: {
      primary: "#fff",
      secondary: "#ccc",
    },
  },
  typography: lightTheme.typography,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 4,
          fontWeight: 600,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        },
      },
    },
  },
});

export function CustomThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    const savedTheme = localStorage.getItem("theme-mode");
    if (savedTheme) setIsDarkMode(savedTheme === "dark");
    else setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  useEffect(() => {
    if (isHydrated) localStorage.setItem("theme-mode", isDarkMode ? "dark" : "light");
  }, [isDarkMode, isHydrated]);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const currentTheme = isHydrated ? (isDarkMode ? darkTheme : lightTheme) : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, theme: currentTheme, isHydrated }}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a Theme Provider");
  return context;
}
