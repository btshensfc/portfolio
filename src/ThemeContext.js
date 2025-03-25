import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    primaryColor: '#FDFAE9', // primary color for bg eggshell
    displayColor: '#FFFFFF', // color for display menu items white
    menuColor: '#E2DFD2', //color for sidebar menus pearl 
    menuTextColor: '#228B22', //text color for sidebar menu
    headerColor: '#518734', //color for header teachquegreen
    textColor: '#333',
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, CustomThemeProvider };