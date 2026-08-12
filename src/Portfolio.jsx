import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Portfolio = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <>
      <h1>Hello Hero section</h1>
    </>
  );
};
