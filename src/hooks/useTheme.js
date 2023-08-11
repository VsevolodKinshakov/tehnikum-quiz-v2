import { useContext } from 'react';
import ThemeContext from '../providers/themeContext'; // Путь к вашему контексту

const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return { theme, toggleTheme };
};

export default useTheme;
