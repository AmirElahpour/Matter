import { createContext, useEffect, useState } from "react";

interface MatterContext {
  isDark: boolean;
  handleTheme: () => void;
}

interface MatterProvider {
  children: React.ReactNode;
}

export const MatterContext = createContext({} as MatterContext);

export const MatterProvider = ({ children }: MatterProvider) => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [isDark]);

  const handleTheme = () => {
    setIsDark((prev) => {
      const newValue = !prev;
      localStorage.setItem("theme", newValue ? "dark" : "light");
      return newValue;
    });
  };

  return (
    <MatterContext.Provider value={{ handleTheme, isDark }}>
      {children}
    </MatterContext.Provider>
  );
};
