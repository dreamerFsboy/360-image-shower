# 全景图展示项目

本项目原本的目的是给同学做一个查看全景图的网站，但是后来找到更合适的软件了所以这个直接放出来了
本项目可以直接部署到vercel上，不过为了不浪费我的免费带宽就先关掉了，想测试的朋友可以把本代码拉到自己的仓库里直接部署用
所有的图片直接丢到public的imgs里即可，编译时会自动读取，至于想用自己的数据库什么的这边建议参考封装的组件，当然我这里引入pannellum的方法有点傻逼，不过这个主要是为了保证网站不会在一些场景下因为加载不出来某些代码导致崩（比如说过去用原生js的时候调了个clipboardjs结果没加载出来的怪事）

如果pannellum的api文档看不懂建议去把所有的样例看一遍，十分有效（我是傻逼捏，当初卡了半天没找到想要的功能）


# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

While this project uses Vue.js, Vite supports many popular JS frameworks. [See all the supported frameworks](https://vitejs.dev/guide/#scaffolding-your-first-vite-project).

## Deploy Your Own

Deploy your own Vite project with Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/vercel/tree/main/examples/vite&template=vite)

_Live Example: https://vite-vue-template.vercel.app_

### Deploying From Your Terminal

You can deploy your new Vite project with a single command from your terminal using [Vercel CLI](https://vercel.com/download):

```shell
$ vercel
```