

## 使用typescript 项目开发

``` javascript

// 全局安装ts
npm install -g typescript

// 安装依赖 项目跟目录执行
npm i

// 打包
npm run build

// 开发模式
npm run dev


```

## 目录结构

-- src

---- 
## 如果解决 ts 生成js 多了很多_extends 方法？

+ 方式一：
 - 1. tsconfig.json 在compilerOptions增加 "noEmitHelpers": true, 
 - 2. webpack配置文件中增加

 ``` javascript 

    new webpack.ProvidePlugin({
      __extends: path.join(__dirname, '../helpers', 'typescript-extends.js'),
      __assign: path.join(__dirname, '../helpers', 'typescript-assign.js'),
    })

```

+ 方式二：
- 修改 tsconfig.json

``` 
    安装依赖
    tnpm install tslib --save
```

``` javascript
    "moduleResolution": "node",
    "noEmitHelpers": true,
    "importHelpers": true,
```
