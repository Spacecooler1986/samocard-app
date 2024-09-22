import {
  FolderIcon,
  HomeIcon,
  MessageIcon,
  PictureIcon,
  TagIcon,
} from '@/components/common/ui-kit'

export type MenuLinkConfig = {
  id: string;
  title: string;
  icon: React.FC;
  to: string;
};

export const menuItems: MenuLinkConfig[] = [
  {
    id: 'main',
    title: 'Главная',
    icon: HomeIcon,
    to: '/',
  },
  {
    id: 'projects',
    title: 'Мои проекты',
    icon: FolderIcon,
    to: '/projects',
  },
  {
    id: 'templates',
    title: 'Шаблоны',
    icon: PictureIcon,
    to: '/templates',
  },
  {
    id: 'rates',
    title: 'Тарифы',
    icon: TagIcon,
    to: '/rates',
  },
  {
    id: 'support',
    title: 'Поддержка',
    icon: MessageIcon,
    to: '/support',
  },
]
