# API 导出工具

**新写了一个 vscode 插件，使用起来更便捷，插件地址: [generate-api](https://marketplace.visualstudio.com/items?itemName=wanpp.generate-api-for-apifox)**

### Changelog

#### [1.3.0] - 2024-11-28

1. Added: 新增可添加多个配置，方便不同项目使用不同配置
2. Changed: 😜 prettier icon & prettier background

---

使用 Apifox 软件导出的 swagger 3.0/3.1 格式的 json 文件，导出 TypeScript 接口请求和定义的两个文件。

![预览](/src/assets/images/1725069027715.jpg)

```
 Apis.ts    // 各接口的请求
 Interface.ts  // 各接口的request和response的参数定义
```

两个文件分别长这样：
![预览](/src/assets/images/1725069004510.jpg)

软件预览：
![预览](/src/assets/images/1725069642638.jpg)
![预览](/src/assets/images/1725069729999.jpg)

## 下载&安装

[Release](https://github.com/6653302wy/export-defines-tool/releases) 里有编译好的安装包文件，直接下载安装即可。 也可以自行下载源码编译。

## 介绍&文档

软件可以自定义设置接口定义的导出结构，请求代码，添加多个服务等功能。
导出的 api 以函数方式调用，接口数据以 promise 的形式返回。接口名的命名规则是 api 名首字母大写驼峰式。
如：api 名称为`user/login`， 那么导出的请求函数名则为`UserLogin()`，请求时这么写：

```
UserLogin({}).then((res)=>{
    // here is your logic code
})
```

软件详细使用介绍请见 [Document](https://github.com/6653302wy/export-defines-tool/blob/main/Document.md)

## 下载源码自行编译

**运行**
`pnpm tauri dev `

**编译**

`pnpm tauri build `
