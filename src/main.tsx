import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.less' //全局样式配置
import './global.less'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
