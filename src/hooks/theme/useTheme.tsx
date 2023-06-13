import { useContext } from 'react';
import { ThemeContext } from '../../theme/ThemeProvider';
import type { theme } from '../../theme/theme';

export function useTheme<SType = unknown>(
  styles: (theme: theme) => SType
): [SType, theme] {
  const theme = useContext<theme>(ThemeContext);
  return [styles(theme), theme];
}
