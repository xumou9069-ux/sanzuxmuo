import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import App from '../App';
import { Home, About, NotFound } from '../pages';

// 定义路由配置
const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

// 创建路由器
const router = createBrowserRouter(routes);

export default router;
