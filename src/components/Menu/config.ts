import { CSSProperties, ReactNode } from "react"
import { ItemEventType } from "./MenuEvent"
/**
 * @title           菜单Item属性
 * @label           菜单项标题
 * @danger          展示错误状态样式
 * @disabled        是否禁用
 * @icon            图标
 * @key             唯一标识
 * @shrinkTitle     菜单收缩时标题
 */
interface MenuItemType {
  label: string
  key: string
  danger?: boolean
  disabled?: boolean
  icon?: ReactNode
  shrinkTitle?: string
}

/**
 * @title   子菜单Item属性
 */
interface SubMenuItemType {
  label: string
  key: string
  danger?: boolean
  disabled?: boolean
  icon?: ReactNode
  shrinkTitle?: string
}
type ItemType = MenuItemType | SubMenuItemType

interface MenuRefs {
  menu: HTMLUListElement
  focus: (options?: FocusOptions) => void
}
/**
 * @menu                    组件属性
 * @mode                    菜单类型，支持垂直、水平、内嵌(默认垂直-vertical)
 * @style                   根节点ul样式
 * @subMenuCloseDelay       用户鼠标离开子菜单后关闭延时，单位：秒,默认0.1s
 * @subMenuOpenDelay        用户鼠标进入子菜单后开启延时，单位：秒,默认0
 * @triggerSubMenuAction    菜单展开/关闭触发行为 hover | click ,hover只在vertical和horizontal中使用
 * @defaultOpenKeys         menu渲染完成后初始打开的SubMenu子菜单数组(搭配defaultSelectedKeys来选择子菜单)
 * @defaultSelectedKeys     初始选中的菜单项key数组
 * @openKeys                当前展开的SubMenu子菜单key数组
 * @selectedKeys            当前选中的菜单项key数组
 * @onClick                 Menu菜单单击事件
 */
interface MenuProps extends Omit<React.HTMLAttributes<HTMLUListElement>, "onClick" | "onSelect" | "dir">, Pick<ItemEventType, "onClick"> {
  item?: Array<ItemType>
  mode?: "vertical" | "horizontal" | "inline"
  style?: CSSProperties
  subMenuCloseDelay?: number
  subMenuOpenDelay?: number
  triggerSubMenuAction?: "hover" | "click"
  defaultOpenKeys?: string[]
  defaultSelectedKeys?: string[]
  openKeys?: string[]
  selectedKeys?: string[]
}

type CompoundedComponent = React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<MenuRefs>>

export type { CompoundedComponent, MenuProps, MenuRefs }
