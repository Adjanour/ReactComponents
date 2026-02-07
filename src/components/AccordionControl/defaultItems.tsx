import {
  HomeIcon,
  ClipboardListIcon,
  CollectionIcon,
  UserGroupIcon,
  CogIcon,
  AcademicCapIcon,
  SpeakerphoneIcon,
  BookOpenIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  IdentificationIcon,
  ChartSquareBarIcon,
} from '@heroicons/react/outline';
import { AccordionItemType } from './types';

export const defaultAccordionItems: AccordionItemType[] = [
  {
    title: 'Home',
    icon: <HomeIcon className="h-5 w-5" />,
    path: '/',
  },
  {
    title: 'Task',
    icon: <ClipboardListIcon className="h-5 w-5" />,
    children: [
      {
        title: 'All Tasks',
        path: '/task/all',
      },
      {
        title: 'My Tasks',
        path: '/task/my',
        icon: <UserGroupIcon className="h-5 w-5" />,
      },
      {
        title: 'Assigned Tasks',
        path: '/task/assigned',
        icon: <ClipboardListIcon className="h-5 w-5" />,
      },
      {
        title: 'Dashboard',
        path: '/task/dashboard',
        icon: <ChartSquareBarIcon className="h-5 w-5" />,
      },
    ],
  },
  {
    title: 'Project',
    icon: <CollectionIcon className="h-5 w-5" />,
    children: [
      {
        title: 'All Projects',
        path: '/projects/all',
      },
      {
        title: 'My Projects',
        path: '/projects/my',
      },
      {
        title: 'Assigned Projects',
        path: '/projects/assigned',
      },
    ],
  },
  {
    title: 'Team',
    icon: <UserGroupIcon className="h-5 w-5" />,
    children: [
      {
        title: 'All Teams',
        path: '/teams/all',
      },
      {
        title: 'My Teams',
        path: '/teams/my',
      },
      {
        title: 'Assigned Teams',
        path: '/teams/assigned',
      },
    ],
  },
  {
    title: 'Settings',
    icon: <CogIcon className="h-5 w-5" />,
    path: '/settings',
    children: [
      {
        title: 'Profile',
        path: '/settings/profile',
        icon: <IdentificationIcon className="h-5 w-5" />,
      },
      {
        title: 'Account',
        path: '/settings/account',
      },
      {
        title: 'Notifications',
        path: '/settings/notifications',
      },
    ],
  },
  {
    title: 'Education',
    icon: <AcademicCapIcon className="h-5 w-5" />,
    path: '/education',
  },
  {
    title: 'Announcements',
    icon: <SpeakerphoneIcon className="h-5 w-5" />,
    path: '/announcements',
  },
  {
    title: 'Library',
    icon: <BookOpenIcon className="h-5 w-5" />,
    path: '/library',
  },
  {
    title: 'Explore',
    icon: <GlobeAltIcon className="h-5 w-5" />,
    path: '/explore',
  },
  {
    title: 'Technology',
    icon: <LightningBoltIcon className="h-5 w-5" />,
    path: '/technology',
  },
];
