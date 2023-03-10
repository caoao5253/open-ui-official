import Menu from '@/src/components/Menu'
import { useCallback, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { whiteRoute } from '@/src/resource/whiteList'
import head from './index.module.less'
import route from '@/router/index'
import { MenuProps } from '@/src/components/Menu/config0'
import { ReactComponent as Logo } from '@/src/assets/svg/github.svg'
import { ItemEventType } from '@/src/components/Menu/MenuEvent'
const items: MenuProps['item'] = []

route.map((item, index) => {
  //白名单直接跳过不进入导航菜单
  if (whiteRoute.includes(item.path as string)) return
  if (item.hideLayout) return
  items.push({
    label: item.title as string,
    key: index.toString()
  })
})
//网站头部组件封装
const Head: React.FC = () => {
  const [ab, seta] = useState<any>()
  const navigate = useNavigate()
  const uef = useRef(null)
  const a: ItemEventType['onClick'] = useCallback((info: any) => {
    seta(info)
    console.log(uef.current, info)
  }, [])
  // let now = performance.now();
  // while (performance.now() - now < 100) {}
  // console.log("耗时的组件：Head render");
  return (
    <>
      <header className={head['head-container']}>
        <div className={head['left-container']}>
          <h1>Logo</h1>
        </div>
        <div className={head['right-container']}>
          <div className={head['nav-search-wrapper']}></div>
          <Menu ref={uef} item={items} onClick={a} mode='horizontal' />
          <a href='https://github.com/caoao5253/open-ui' target='_blank' rel='noreferrer '>
            <button className={head['btn-extend']} onClick={(e) => e.target}>
              <span className={head['icon-extend']}>
                <Logo />
              </span>
            </button>
          </a>
        </div>
      </header>
    </>
  )
}
export default Head
