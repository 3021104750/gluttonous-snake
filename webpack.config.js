const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin'); // 自动生成 index.html 文件

module.exports = {
  mode: "development",
  entry: "./src/index.ts", //  指定入口文件
  // 指定打包文件所在目录
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // 打包后生成文件的名字,
    clean: true // 每次 npm run start 后，都会删除 dist 重新创建
  },
  // 指定webpack打包时要使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        test: /\.ts$/, // test 指定的是规则生效的文件
        use: [
          //  配置 babel
          {
            // 设置加载器
            loader: "babel-loader",
            // 设置babel
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      "chrome": "58",
                      "ie": "11"
                    },
                    // 指定corejs的版本
                    "corejs": "3",
                    // 使用corejs的方法
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          // 要使用的loader
          'ts-loader'
        ],
        exclude: /node-modules/ // 指定要排除的文件
      },
      // 设置less文件处理
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          // 引入postcss
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 versions"
                    }
                  ]
                ]
              }
            }
          },
          "less-loader",
        ]
      }
    ]
  },

  // 配置webpack插件
  plugins: [
    // 自动生成 index.html 文件
    new HTMLWebpackPlugin({
      // title: "贪吃蛇" // 修改html里的title
      template: "./src/index.html" /* 提供模版，build后直接使用这个html作为模版 */
    })
  ],

  // 用来设置引用模块
  resolve: {
    // 表示在import文件时，文件后缀名可以不写
    extensions: ['.js', '.ts'],
    alias: {
      // 表示设置路径别名，在import时，可以直接 import xxx from ‘@/...’
      '@': path.join(__dirname, './src')
    }
  }
};