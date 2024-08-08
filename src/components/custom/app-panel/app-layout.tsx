import { Link, Outlet, useRouterState } from '@tanstack/react-router';
import { useAppSelector } from '~/lib/hooks';
import { cn } from '~/lib/utils.ts';

import { ContentLayout } from '~/components/custom/app-panel/content-layout';
import { selectSidebar } from '~/components/custom/app-panel/sidebar.slice';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '~/components/ui/breadcrumb';

import { Footer } from './footer';
import { Sidebar } from './sidebar';

export function AppLayout() {
  const { isOpen, showSidebar } = useAppSelector(selectSidebar);

  const breadcrumbs = useRouterState({
    select: (state) => {
      return state.matches
        .map((match) => ({
          title: match.meta?.find((tag) => tag.title)?.title,
          path: match.pathname,
        }))
        .filter((crumb) => Boolean(crumb.title));
    },
  });

  console.log('🚀 ~ AppLayout ~ breadcrumbs:', breadcrumbs);
  const breadcrumb = breadcrumbs.at(0);
  console.log(breadcrumb);

  if (!showSidebar) return null;

  return (
    <>
      <Sidebar />
      <main
        className={cn(
          'min-h-[calc(100vh_-_56px)] bg-zinc-50 transition-[margin-left] duration-300 ease-in-out dark:bg-zinc-900',
          !isOpen ? 'lg:ml-[90px]' : 'lg:ml-72',
        )}
      >
        <ContentLayout title='Dashboard'>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to='/'>Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{breadcrumb?.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Outlet />
        </ContentLayout>
      </main>
      <footer
        className={cn(
          'transition-[margin-left] duration-300 ease-in-out',
          !isOpen ? 'lg:ml-[90px]' : 'lg:ml-72',
        )}
      >
        <Footer />
      </footer>
    </>
  );
}

export default AppLayout;
