import { createFileRoute } from '@tanstack/react-router';

import PlaceholderContent from '~/components/custom/app-panel/placeholder-content';

export const Route = createFileRoute('/posts/$postId')({
  component: () => <PlaceholderContent />,
  meta: ({ params }) => [
    {
      title: `Post`,
    },
    {
      title: `Post ${params.postId}`,
    },
  ],
});
