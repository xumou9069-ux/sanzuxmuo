// 路由路径常量
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
} as const;

// 路由配置类型
export interface RouteConfig {
  path: string;
  name: string;
  component?: React.ComponentType;
}

// 路由菜单配置
export const menuRoutes: RouteConfig[] = [
  {
    path: ROUTES.HOME,
    name: '首页',
  },
  {
    path: ROUTES.ABOUT,
    name: '关于',
  },
];

export default ROUTES;
