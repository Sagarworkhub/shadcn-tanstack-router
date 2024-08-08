import { createFileRoute } from '@tanstack/react-router';

import PlaceholderContent from '~/components/custom/app-panel/placeholder-content';

export const Route = createFileRoute('/posts/new')({
  component: () => <PlaceholderContent />,
  meta: () => [
    {
      title: 'New Post',
    },
  ],
});
