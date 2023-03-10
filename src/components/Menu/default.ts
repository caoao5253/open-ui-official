import { MenuProps } from './config0'
import { ItemSharedProps } from './MenuEvent'
import classNames from 'classnames'

//垂直模式  子菜单展开为悬浮抽屉
const verticalDef: Partial<HTMLElement> = {
  className: 'open-menu-vertical'
}
//水平模式子菜单展开为悬浮抽屉
const horizontalDef: Partial<HTMLElement> = {
  className: 'open-menu-horizontal'
}
//内嵌模式 子菜单展开
const inlineDef: Partial<HTMLElement> = {
  className: 'open-menu-inline'
}
//默认配置
//融合后的结果数据
type defSettingProps = Required<Pick<MenuProps, keyof ItemSharedProps | 'mode' | 'subMenuCloseDelay' | 'subMenuOpenDelay' | 'triggerSubMenuAction'>>

const dataFusion = (props: Partial<MenuProps>, defState: defSettingProps) => {
  //更新后的
  let upState: Partial<defSettingProps> = {
    className: ''
  }
  //匹配 mode 模式 并且融合className
  switch (props.mode) {
    case 'vertical':
      upState.className = classNames(defState.className, verticalDef.className)
      upState.triggerSubMenuAction = props?.triggerSubMenuAction || 'hover'
      break
    case 'horizontal':
      upState.className = classNames(defState.className, horizontalDef.className)
      upState.triggerSubMenuAction = props?.triggerSubMenuAction || 'hover'
      break
    case 'inline':
      upState.className = classNames(defState.className, inlineDef.className)
      //内嵌模式菜单展开只能click
      upState.triggerSubMenuAction = 'click'
      break
    default:
      upState.className = classNames(defState.className, verticalDef.className)
      break
  }

  return Object.assign({}, defState, upState)
}
export { dataFusion }
export type { defSettingProps }
