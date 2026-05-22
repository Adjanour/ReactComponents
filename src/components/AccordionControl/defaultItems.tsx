import type { AccordionItemType } from './types';

export const defaultAccordionItems: AccordionItemType[] = [
  { title: 'Home', path: '/' },
  {
    title: 'Task',
    children: [
      { title: 'All Tasks', path: '/task/all' },
      { title: 'My Tasks', path: '/task/my' },
      { title: 'Assigned Tasks', path: '/task/assigned' },
      { title: 'Dashboard', path: '/task/dashboard' },
    ],
  },
  {
    title: 'Project',
    children: [
      { title: 'All Projects', path: '/projects/all' },
      { title: 'My Projects', path: '/projects/my' },
      { title: 'Assigned Projects', path: '/projects/assigned' },
    ],
  },
  {
    title: 'Team',
    children: [
      { title: 'All Teams', path: '/teams/all' },
      { title: 'My Teams', path: '/teams/my' },
      { title: 'Assigned Teams', path: '/teams/assigned' },
    ],
  },
  {
    title: 'Settings',
    path: '/settings',
    children: [
      { title: 'Profile', path: '/settings/profile' },
      { title: 'Account', path: '/settings/account' },
      { title: 'Notifications', path: '/settings/notifications' },
    ],
  },
  { title: 'Education', path: '/education' },
  { title: 'Announcements', path: '/announcements' },
  { title: 'Library', path: '/library' },
  { title: 'Explore', path: '/explore' },
  { title: 'Technology', path: '/technology' },
];
