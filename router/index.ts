import { lazy } from "react";
import { PathRouteProps } from "react-router-dom";
/**
 * 路由配置
 * @title       路由标题
 * @children    子路由
 * @isLayout    是否是Layout侧边栏菜单
 * @redirect    重定向地址
 */
interface routeConfig extends Omit<PathRouteProps, "children"> {
  title: string;
  redirect?: string;
  isLayout?: boolean;
  children?: Array<routeConfig>;
}
export default [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    element:lazy(()=>import('@/src/docs/index.md'))
  }
] as routeConfig[];
