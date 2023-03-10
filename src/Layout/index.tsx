import { BrowserRouter, Route, Routes } from "react-router-dom"
import route from "@/router/index"
import MDX from "@/src/plugins"
import React, { Suspense, useRef } from "react"
import Loading from "./Loading"
import Head from "./Head"
import { Menu, MenuProps } from "antd"
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  theme?: 'light' | 'dark',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    theme,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem(
    'Navigation One',
    'sub1',
    'light',
  ),
  getItem('Option 5', '5'),
  getItem('Option 6', '6'),
];
const Layout: React.FC = () => {
  // const uef=useRef(null)
  // const a=(...args: any[])=>{
  //   console.log(uef.current)
  //     console.log(args)
  // }
  return (
    <>
    {/* <Menu onClick={a} items={items} ref={uef}/> */}
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Head />
          <Routes>
            {route.map((item) => {
              if (item.path === "/") {
                return <Route index path={item.path} key={item.path} element={React.createElement(MDX, {})}></Route>
              }
              return <Route path={item.path} key={item.path} caseSensitive element={React.createElement(MDX, { children: item.element })}></Route>
            })}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}
export default Layout
