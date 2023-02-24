import { Row,Col } from "antd"
import { useState } from "react";
import head from "./index.module.less"
//网站头部组件封装
const Head: React.FC = () => {
  const [menuSelect, setmenuSelect] = useState<number>(0);
  return (
    <>
      <header className={head["head-container"]}>
        <div className={head["left-container"]}>
          <h1>Logo</h1>
        </div>
        <div className={head["right-container"]}>
          <div className={head["nav-search-wrapper"]}></div>
          <ul className={head["open-menu-root"]}>
            {/* <li className={head["open-menu-item"]}>组件</li> */}
            <li className={menuSelect===0?`${head["open-menu-item"]} ${head["open-menu-item-select"]}` : head["open-menu-item"]} onClick={()=>setmenuSelect(0)}>博客</li>
            <li className={menuSelect===1?`${head["open-menu-item"]} ${head["open-menu-item-select"]}` : head["open-menu-item"]} onClick={()=>setmenuSelect(1)}>国内镜像</li>
          </ul>
        </div>
        {/* <div className="open-row">
        <div className={'  open-col-xs-24'}>dawdaw</div>
        </div> */}
       
      </header>
    </>
  )
}
export default Head
