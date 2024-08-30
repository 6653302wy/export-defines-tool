# apifox-tool 导出 TypeScript 的接口数据定义

根据 apifox 导出的 swagger 格式的 json 文件，会导出两个 TypeScript 的接口和接口参数数据定义的文件。

```
 Interface.ts  // 接口里定义的request和response的参数定义
 Apis.ts    // 各个接口的请求导出
```

软件预览：
![预览](/src/assets/images/preview1.png)
![预览](/src/assets/images/preview2.png)
![预览](/src/assets/images/preview3.png)

Interface.ts 预览

![生成的代码示例](/src/assets/images/preview4.jpg)

Apis.ts 预览：
![生成的代码示例](/src/assets/images/preview5.jpg)

## 安装

release 里有编译好的安装包文件，直接下载安装即可。 也可以自行下载源码编译。

## 运行

`pnpm tauri dev `

## 编译

`pnpm tauri build `
