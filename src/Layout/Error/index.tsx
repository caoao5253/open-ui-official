import { useRouteError } from "react-router-dom";
const ErrorPage: React.FC = () => {
  const error:any = useRouteError();
  console.log('error异常页面：',error)
  return <>
  <div id="error-page">
    <h1>错误!</h1>
    <p>页面渲染发生错误</p>
    <p>异常信息：{error.statusText || error.message}</p>
    </div></>;
};
export default ErrorPage;
