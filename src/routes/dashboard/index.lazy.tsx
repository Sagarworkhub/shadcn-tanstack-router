import { createLazyFileRoute } from '@tanstack/react-router';

import PlaceholderContent from '~/components/custom/app-panel/placeholder-content';

export default function DashBoard() {
  return <PlaceholderContent />;
}

export const Route = createLazyFileRoute('/dashboard/')({
  component: DashBoard,
});
