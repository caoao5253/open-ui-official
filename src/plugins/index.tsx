import { ClassAttributes, HTMLAttributes } from "react";
import { MDXProvider } from "@mdx-js/react";
// ^-- Assumes an integration is used to compile MDX to JS, such as
// `@mdx-js/esbuild`, `@mdx-js/loader`, `@mdx-js/node-loader`, or
// `@mdx-js/rollup`, and that it is configured with
// `options.providerImportSource: '@mdx-js/react'`.

const components = {
  em: (
    props: JSX.IntrinsicAttributes & ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>
  ) => <i {...props} />
};

const MDX: React.FC<{ children?: any }> = (props) => {
  // console.log(props);
  return (
    <>
      <MDXProvider components={components}>{props?.children && <props.children />}</MDXProvider>
    </>
  );
};
export default MDX;
