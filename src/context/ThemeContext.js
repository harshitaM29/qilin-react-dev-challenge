import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(false);
  const switchTheme = () => {
    setTheme(!theme);
  };

  return (
    <div>
      <ThemeContext.Provider value={{ theme, switchTheme }}>
        {props.children}
      </ThemeContext.Provider>
    </div>
  );
};

export { ThemeContext, ThemeContextProvider };
