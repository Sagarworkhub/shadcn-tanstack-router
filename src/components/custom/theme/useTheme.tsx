import { useContext } from 'react';
import invariant from 'tiny-invariant';

import { ThemeProviderContext } from './theme-context';

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  invariant(context, 'useTheme must be used within a ThemeProvider');

  return context;
};
