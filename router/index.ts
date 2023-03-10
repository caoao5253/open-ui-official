import { lazy } from "react";
import { PathRouteProps } from "react-router-dom";
/**
 * 路由配置
 * @title       路由标题
 * @children    子路由
 * @hideLayout    是否是Layout侧边栏菜单
 * @redirect    重定向地址
 * @loader       在路由元素渲染前向其提供数据,该功能只有数据路由器才有效，例如createBrowserRouter、createMemoryRouter、createHashRouter等函数数据路由器才可以。loader?: NonIndexRouteObject["loader"]
 */
interface routeConfig extends Omit<PathRouteProps, "children"> {
  title?: string;
  redirect?: string;
  hideLayout?: boolean;
  children?: Array<routeConfig>;
}

export default [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    title: 'Open UI - 一套由个人开发者设计维护的React组件UI库',
    element: lazy(() => import('@/src/docs/index.md')),
    hideLayout:true
  },
  {
    path: "/docs",
    title:'研发',
    element: lazy(() => import('@/src/docs/index.md')),
  },
  {
    path: "/components",
    title:'组件',
    element: lazy(() => import('@/src/docs/index.md')),
  },
  {
    path: "/blogger",
    title:'博客',
    element: lazy(() => import('@/src/docs/index.md')),
  }
]  as routeConfig[];
