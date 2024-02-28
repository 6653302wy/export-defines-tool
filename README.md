# apifox-tool 导出 TypeScript 的接口数据定义

根据 apifox 导出的 swagger 格式的 json 文件，导出 TypeScript 的接口和接口参数数据定义。

![预览](/src/assets/images/preview.jpg)

主体功能已完成，后续将添加以下功能：

// todo

1. 添加可配置服务和前缀功能 done
2. 添加自定义接口调用函数 90%
    - 某些代码可能要区分 get/post 请求参数名，例如：`params` 和 `data`。 目前只做了 data 参数的处理。
