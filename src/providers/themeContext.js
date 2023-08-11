import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const dark = {
    // свойства для темы dark
  };

  const light = {
    // свойства для темы light
  };

  const [currentTheme, setCurrentTheme] = useState(dark);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === dark ? light : dark);
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export default ThemeContext
