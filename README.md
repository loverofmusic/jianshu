This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### redux单向数据流 流程
先派发 action 给 store ，
store 给 reducer，
reducer 返回一个新的数据给到 store， 
store 去变更自己的内容，
当数据发生变更了，页面自动就变化了


### 项目中曾经写错 导致报错的警告的地方
jianshu/src/common/header/index.js 
=> 
this.getListArea() 写成了 this.getListArea

import React, { Component } from "react"; 写成了 import { React, Component } from "react"

<SearchInfo onMouseEnter={handleMouseEnter}> 写成了 <SearchInfo onMouseEnter={handleMouseEnter()}>

/Users/zhangcong/Desktop/jianshu/src/pages/home/index.js
=>
export const HomeWrapper 导出后 正确导入要用 import { HomeWrapper } from "./style";

### 项目说明
## 7. header组件开发
#### 7-12 ajax获取推荐数据列表（使用redux-thunk发送ajax请求，获取数据，存到store里面，然后在页面显示）

1. 把异步获取数据的逻辑 都放到 actionCreator 里面，
那么就要求 actionCreator 返回的对象不能是一个普通的js对象了，而是一个函数，
要想使 actionCreator 返回的对象是一个 函数， 就必须使用 redux-thunk 这个中间件；

2. 当我们想要改变 store 里面数据的时候， 要注意 
jianshu/src/common/header/store/reducer.js 
里面的 list 被 fromJS 变成了一个 immutable 类型的数组，当你写 return state.set("list", action.data);的时候 action.data 是普通数组类型， 所以在这之前，也就是 actionCreator 里面，要把  changeList 这个 action 里面的 data也转换成 immutable类型

#### 7-13 代码微调

#### 7-14 换一批

#### 7-15 换一批icon旋转特效
ref 可以获取到真实 dom

#### 7-16避免无意义的请求发送，提升组件性能

## 8. 首页组件开发

#### 8.1 路由设置

#### 8.2 首页组件拆分

#### 8.3 首页 专题区域 布局及reducer的设计

#### 8.4 首页 文章列表 制作

#### 8.5 首页 推荐部分 代码编写

#### 8.6 首页 异步数据 获取

#### 8.7 异步操作代码 拆分优化

#### 8.8 首页 加载更多

#### 8.9 返回顶部

#### 8.10 首页性能优化 路由跳转到详情页面


## 9. 详情页面
#### 9.1 详情页面布局

#### 9.2 redux管理详情页面数据 

#### 9.3 异步数据获取

#### 9.4 页面路由参数的传递

#### 9.5 登录页面布局

#### 9.6 登录页面功能实现

#### 9.7 登录鉴权




