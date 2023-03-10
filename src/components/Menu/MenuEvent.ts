/**
 * @title MenuClick点击事件函数入参属性
 */
interface MenuClickInfo {
  key: string
  keyPath: string[]
  domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
}

//单击事件 -点击Menu-Item时调用
type MenuClickEventHandler = (info: MenuClickInfo) => void
//悬浮事件 -鼠标悬浮Menu-item时调用
type MenuHoverEventHandler = (info: { key: string; domEvent: React.MouseEvent<HTMLUListElement> }) => void



//每个Menu、Item、subItem存在的属性
interface ItemSharedProps {
  style?: React.CSSProperties
  className?: string
}

//每个Menu、Item、subItem存在的事件
interface ItemEventType {
  onMouseEnter?: MenuHoverEventHandler
  onMouseLeave?: MenuHoverEventHandler
  onClick?: MenuClickEventHandler
}

export type { ItemSharedProps, ItemEventType }
