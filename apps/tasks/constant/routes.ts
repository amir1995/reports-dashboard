import { TRoutes } from '@/types/types/constantTypes';

export const routes: TRoutes = [
  { url: '/test1', name: 'test1', pathname: '/test1', active: false, image: "/png/test1.png" },
  { url: '/test2', name: 'test2', pathname: '/test2', active: false, image: "/png/test2.png" },
  { url: '/test3', name: 'test3', pathname: '/test3', active: false, image: "/png/test3.png" },
  { url: '/', name: 'home', pathname: '/', active: true, image: "/png/report.png" },
  { url: '/test5', name: 'test5', pathname: '/test5', active: false, image: "/png/test5.png" },
];
