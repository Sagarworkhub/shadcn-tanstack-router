import { createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Provider } from 'react-redux';
import { store } from '~/lib/store';

import { AppLayout } from '~/components/custom/app-panel/app-layout';
import { ThemeProvider } from '~/components/custom/theme/theme-provider';

export const Route = createRootRouteWithContext()({
  component: Home,
});

function Home() {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <AppLayout />
        <TanStackRouterDevtools />
      </ThemeProvider>
    </Provider>
  );
}
