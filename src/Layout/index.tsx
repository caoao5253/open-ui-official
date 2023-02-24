import { BrowserRouter, Route, Routes } from "react-router-dom"
import route from "@/router/index"
import MDX from "@/src/plugins"
import React, { Suspense } from "react"
import Loading from "./Loading"
import Head from "./Head"
const Layout: React.FC = () => {
  return (
    <>
      <Head />
      {/* <main></main> */}
      {/* <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            {route.map((item) => {
              if (item.path === "/") {
                return <Route index path={item.path} key={item.path} element={React.createElement(MDX, {})}></Route>
              }
              return <Route path={item.path} key={item.path} caseSensitive element={React.createElement(MDX, { children: item.element })}></Route>
            })}
          </Routes>
        </Suspense>

      </BrowserRouter> */}
      
    </>
  )
}
export default Layout
