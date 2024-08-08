import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/dashboard/')({
  meta: () => [
    {
      title: 'Dashboard',
    },
  ],
});
