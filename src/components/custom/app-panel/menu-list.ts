import {
  ChartLine,
  FileInput,
  FileOutput,
  FileSpreadsheet,
  Folders,
  LayoutGrid,
  type LucideIcon,
  Rocket,
  Send,
  Settings,
  Users,
} from 'lucide-react';

interface Submenu {
  href: string;
  label: string;
  active: boolean;
}

interface Menu {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon;
  submenus: Array<Submenu>;
}

interface Group {
  groupLabel: string;
  menus: Array<Menu>;
}

export function getMenuList(pathname: string): Array<Group> {
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: '/dashboard',
          label: 'Dashboard',
          active: pathname.includes('/dashboard'),
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Contents',
      menus: [
        {
          href: '',
          label: 'Posts',
          active: pathname.includes('/posts'),
          icon: Send,
          submenus: [
            {
              href: '/posts',
              label: 'All Posts',
              active: pathname === '/posts',
            },
            {
              href: '/posts/new',
              label: 'New Post',
              active: pathname === '/posts/new',
            },
            {
              href: '/posts/1',
              label: 'Specific Post',
              active: pathname === '/posts/1',
            },
          ],
        },
        {
          href: '/data-imports',
          label: 'Data Imports',
          active: pathname.includes('/data-imports'),
          icon: FileInput,
          submenus: [],
        },
        {
          href: '/reports',
          label: 'Reports',
          active: pathname.includes('/reports'),
          icon: FileSpreadsheet,
          submenus: [],
        },
        {
          href: '/charts',
          label: 'Charts',
          active: pathname.includes('/charts'),
          icon: ChartLine,
          submenus: [],
        },
        {
          href: '/data-exports',
          label: 'Data Exports',
          active: pathname.includes('/data-exports'),
          icon: FileOutput,
          submenus: [],
        },
        {
          href: '/folders',
          label: 'Folders',
          active: pathname.includes('/folders'),
          icon: Folders,
          submenus: [],
        },
        {
          href: '/deployment',
          label: 'Deployment',
          active: pathname.includes('/deployment'),
          icon: Rocket,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'Settings',
      menus: [
        {
          href: '/users',
          label: 'Users',
          active: pathname.includes('/users'),
          icon: Users,
          submenus: [],
        },
        {
          href: '/account',
          label: 'Account',
          active: pathname.includes('/account'),
          icon: Settings,
          submenus: [],
        },
      ],
    },
  ];
}
