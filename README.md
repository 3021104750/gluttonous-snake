# Gluttonous-Snake 贪吃蛇

### 摘要
```
用于练习TypeScript和Webpack而制作的网页小游戏。
```

### 描述
```
1. 编辑tsconfig.ts，指定转换js版本（es6）、使用模块（es6）和开启严格模式。
2. 使用webpack配置插件html-webpack-plugin，自动整合ts并且生成html。
3. 配置插件style、css、less的loader使webpack可以处理less文件并且转换成css格式。
4. 配置插件babel-loader，使浏览器可以认识和加载es6语法（可手动指定chrome或者ie要兼容的最低版本，并且转换其认识的低版本js语法）。
5. 配置插件postcss-loader，使html里的css代码兼容各个版本。
6. 指定webpack打包文件后的生产文件及其所在目录（./src/dist）。
7. 编辑declareModule.d.ts，声明js文件，使ts文件里可以引入js。
8. 使用模块化开发，创建类进行模块管理，使用时直接调用实例对象来获取实例方法。
```

### 包含功能
* 点击开始游戏按钮或者按下回车键，开始贪吃蛇游戏，按下键盘方向键控制蛇的移动方向
* 连续按下方向键无法快速转变方向，设有防抖功能，防止在蛇还没有移动到下一个位置时，方向就改变了
* 防抖延迟随着游戏的难度越来越高（蛇的移动速度越来越快）而变短
* 每次吃到食物后，蛇的身体会增长一节，得分加一
* 每得2分，增加一个难度，最高难度为6级
* 吃到食物后，下一个食物的位置会随机出现，其颜色也会随机改变
* 吃到食物后，游戏擂台会有震动动画，并且游戏界面会有翻转特效
* 蛇撞击墙或者自己身体时，游戏结束，可点击重新开始游戏按钮重新开始贪吃蛇游戏
* 精美3d动态背景

### 使用技术
* 语言
  > Html
  >
  > Css (Less)
  >
  > TypeScript
  >
  > JavaScript
* 初始化
  > 无
* 适配方案
  > 无
* 框架
  > 无

* 打包工具

  > Webpack

* 组件库
  > 无
* 动画库
  > vanta.js
  >
  > animate.css