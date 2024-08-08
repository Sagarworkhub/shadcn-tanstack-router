import { createFileRoute } from '@tanstack/react-router';

import PlaceholderContent from '~/components/custom/app-panel/placeholder-content';

export const Route = createFileRoute('/data-imports/')({
  component: () => <PlaceholderContent />,
  meta: () => [
    {
      title: 'Data Imports',
    },
  ],
});
