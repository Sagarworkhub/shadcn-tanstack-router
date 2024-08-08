import { createFileRoute } from '@tanstack/react-router';

import PlaceholderContent from '~/components/custom/app-panel/placeholder-content';

export const Route = createFileRoute('/posts/')({
  component: () => <PlaceholderContent />,
  meta: () => [
    {
      title: 'Posts',
    },
  ],
});
