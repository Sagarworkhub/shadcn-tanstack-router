import { createFileRoute, useRouterState } from '@tanstack/react-router';

import PlaceholderContent from '~/components/custom/app-panel/placeholder-content';

const DataExports = () => {
  const breadcrumbs = useRouterState({
    select: (state) => {
      return state.matches
        .map((match) => ({
          title: match.meta?.find((tag) => tag.title)?.title,
          path: match.pathname,
        }))
        .filter((crumb) => Boolean(crumb.title))
        .at(0);
    },
  });
  console.log(breadcrumbs);
  return <PlaceholderContent />;
};

export const Route = createFileRoute('/data-exports/')({
  component: DataExports,
  meta: () => [
    {
      title: 'Data Exports',
    },
  ],
});
