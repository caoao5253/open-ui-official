import { BrowserRouter, Route, Routes } from "react-router-dom";
import route from "@/router/index";
import bg from "../docs/index.md";
import mdxs from "../mdx";
import React from "react";
import router from "@/router/index";
const Layout: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {router.map((item) => {
            if (item.path === "/")
              return (
                <Route
                  path={item.path}
                  key={item.path}
                  element={React.createElement(mdxs, {})}
                ></Route>
              );
            return (
              <Route
                path={item.path}
                key={item.path}
                element={React.createElement(mdxs, { children: item.element })}
              ></Route>
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default Layout;
