import {
  DeliveredProcedureOutlined,
  FileProtectOutlined,
  FileUnknownOutlined,
  HomeOutlined,
  ProfileOutlined,
} from '@ant-design/icons';

export interface MenuElement {
  key: string;
  to: string;
  label: string;
  icon: any;
  children?: MenuElement[];
}

export const menus = [
  {
    label: 'Home',
    to: '/',
    exact: true,
  },
  {
    label: 'Category',
    to: '/category',
    exact: false,
  },
  {
    label: 'Quiz Online',
    to: '/quiz',
    exact: false,
  },
  {
    label: 'About',
    to: '/about',
    exact: false,
  },
];

export const defaultMenus: Array<MenuElement> = [
  {
    key: 'home',
    to: '/',
    label: 'Home page',
    icon: HomeOutlined,
    children: [],
  },
];

export const features: Array<MenuElement> = [
  {
    key: 'question-management',
    to: '/question-management',
    label: 'Question Management',
    icon: FileUnknownOutlined,
    children: [],
  },
  {
    key: 'exam-management',
    to: '/exam-management',
    label: 'Exam Management',
    icon: ProfileOutlined,
    children: [],
  },
  {
    key: 'quiz-management',
    to: '/quiz-management',
    label: 'Quiz Management',
    icon: DeliveredProcedureOutlined,
    children: [],
  },
];

export const settings: Array<MenuElement> = [
  {
    key: 'account-management',
    to: '/account-management',
    label: 'Account',
    icon: ProfileOutlined,
    children: [
      {
        key: 'change-Password',
        to: '/change-Password',
        label: 'Change Password',
        icon: HomeOutlined,
        children: [],
      },
      {
        key: 'edit-account',
        to: '/edit-account',
        label: 'Edit account',
        icon: ProfileOutlined,
        children: [],
      },
    ],
  },
  {
    key: 'users-management',
    to: '/users-management',
    label: 'User Management',
    icon: FileProtectOutlined,
    children: [
      {
        key: 'option1',
        to: '/option1',
        label: 'option1',
        icon: HomeOutlined,
        children: [],
      },
      {
        key: 'option2',
        to: '/option2',
        label: 'option2',
        icon: HomeOutlined,
        children: [],
      },
      {
        key: 'option3',
        to: '/option3',
        label: 'option3',
        icon: ProfileOutlined,
        children: [],
      },
    ],
  },
];
