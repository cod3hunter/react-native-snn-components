import { createContext } from 'react';
import type { theme } from './theme';
import light from './light';

export const ThemeContext = createContext<theme>(light);

export default ThemeContext.Provider;
