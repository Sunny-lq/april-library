/*
 * @Description:
 * @Author: April
 * @Date: 2024-05-28 14:04:20
 * @LastEditors: April
 * @LastEditTime: 2024-06-06 15:51:42
 */
import { defineConfig } from 'dumi';
export default defineConfig({
  title: 'april-ui',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  base: '/april-ui/',
  publicPath: '/april-ui/',
  exportStatic:{}
  // more config: https://d.umijs.org/config
});
