import { useTheme } from "../hooks/useTheme";
import { FaSun, FaMoon } from "react-icons/fa";
import Button from "./Button";

const ThemeToggle = ({ ...rest }) => {
  const { theme, toggleTheme } = useTheme();
  const themeToggleIcon = theme === "dark" ? FaSun : FaMoon;
  return (
    <Button
      onClick={toggleTheme}
      aria-label="Змінити тему"
      className=" text-gray-600 dark:text-white-300 hover:text-yellow-500 transition"
      icon={themeToggleIcon}
      {...rest}
    ></Button>
  );
};

export default ThemeToggle;
