import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import mdx from '@mdx-js/rollup'
import mdxReact from '@mdx-js/react'
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./')
    }
  },
  plugins: [
    {enforce:'pre',...mdx()},
    react({
    include:[/\.(ts|tsx)$/]
  })],
})
