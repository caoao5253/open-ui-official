import React, { useCallback, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'
import menuStyles from './index.module.less'
import { CompoundedComponent, MenuProps, MenuRefs } from './config'
import { dataFusion, defSettingProps } from './default'
import { debounce, throttle } from '../userHandlerEvent'
import { v4 as uuidv4 } from 'uuid'
//default-settings
const defState: defSettingProps = {
  className: 'open-menu',
  mode: 'vertical',
  subMenuCloseDelay: 0.1,
  subMenuOpenDelay: 0,
  triggerSubMenuAction: 'hover',
  style: {}
}
const Menu: CompoundedComponent = React.memo(
  React.forwardRef<MenuRefs, MenuProps>((props, refParam) => {
    console.log('子组件渲染')
    const [childClassAcviteState, setchildClassAcviteState] = useState<number>(0)
    const [childClassSelectedState, setchildClassSelectedState] = useState<number>(0)
    //ref
    const menuRef = useRef<HTMLUListElement>(null)
    //解构props值
    const { onClick, className } = props

    //缓存值 防止重复变化
    const defStateMemo = useMemo(() => {
      return dataFusion(props, defState)
    }, [...Object.keys(props)])

    //向上传递ref时隐藏非必要信息
    useImperativeHandle(refParam, () => ({
      menu: menuRef.current as HTMLUListElement,
      focus(options?) {
        menuRef.current?.focus(options)
      }
    }))
    //处理ul - className
    const menuClassName = defStateMemo.className
      .split(' ')
      .map(e => menuStyles[e])
      .join(' ')
    //处理li - className
    // const childClassName=
    //鼠标单击事件
    const onItemClick = useCallback(
      debounce(e => {
        let keyStr = e?.target?.attributes[`el-key`]?.value
        onClick?.({
          key: keyStr,
          keyPath: [keyStr],
          domEvent: e.target
        })
      }),
      []
    )
    //鼠标悬浮-active
    const onItemMouseMove = throttle(
      e => {
        //停止事件向上派发
        e.stopPropagation()
        let targetDom = e.target || e.srcElement
        //如果悬浮在Ul上停止鉴定
        if (targetDom.localName === 'ul') return
        //获取li标签的父元素Ul
        let parentDom = targetDom?.parentElement?.childNodes
        //是否是NodeList集合(只有数组才有push函数)
        if (typeof parentDom?.push === 'undefined') {
          try {
            let tempArray = Array.from(parentDom)
            //鉴定不存在值为-1
            setchildClassAcviteState(tempArray.indexOf(targetDom))
          } catch (error) {
            throw new Error('li元素事件捕捉异常')
          }
        } else {
          setchildClassAcviteState(parentDom.indexOf(targetDom))
        }
      },
      0,
      true
    )
    useEffect(() => {
      console.log('defStateMemo update!', defStateMemo, defStateMemo.className.split(' '))
    }, [defStateMemo])
    return (
      <>
        <ul className={menuClassName} ref={menuRef} onClick={onItemClick} onMouseMove={onItemMouseMove}>
          {props &&
            props?.item?.map((item, index) => {
              return (
                <li
                  className={[menuStyles.class, menuStyles['open-menu-item'], childClassAcviteState === index ? menuStyles['open-menu-item-active'] : '', childClassSelectedState === index ? menuStyles['open-menu-item-selected'] : ''].join(' ')}
                  key={item.label}
                  el-key={`open-menu-${uuidv4()}`}
                >
                  {item.label}
                </li>
              )
            })}
        </ul>
      </>
    )
  })
)
export default Menu
