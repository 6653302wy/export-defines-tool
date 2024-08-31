## 背景

前端开发时，后端定义的接口不想手动 copy，只想偷懒一键帮我生成请求和定义文件，方便我快速搬砖，因此写了这个工具。好了，下面开始软件的使用介绍，根据图中 1，2，3，4，5 的标注说明。

![预览](/src/assets/images/doc/1725071589789.jpg)

## 介绍

1. **生成目录**

    即文件生成后存放的位置，本人习惯存放在项目的 api 文件夹中。

2. **返回数据的字段名**

    接口一般返回都会按照 code,message,data 等格式定义，大部分情况下我们只需要关注 data（该字段名可根据实际情况填写） 里的数据，因此加了这个选项。打开即只导出 data 字段的数据定义。详细如下图：

不打开此选项,返回完整数据定义：
![alt text](/src/assets/images/doc/1725071218261.jpg)

打开此选项,返回 data 定义：
![alt text](/src/assets/images/doc/1725071759274.jpg)

3. **自定义请求代码**

    项目中一般都会封装一个自己的请求代码，此处可以替换为你自己封装的代码。默认以 axios 的请求导出。

-   例如，导出时默认使用 axios：
    ![alt text](/src/assets/images/doc/1725072283140.jpg)

-   3.1 自定义代码时，需要设置一个你自己封装代码的 import,此 import 会加在 Api.ts 文件中，若没有设置，放在项目中会报错找不到你的请求代码。
    ![alt text](/src/assets/images/doc/1725072708032.jpg)

-   3.2 具体请求的代码，需要使用@url, @method, @data, @contentType 替换你代码里的 url,data 等数据，使用方法如下：
    ![alt text](/src/assets/images/doc/1725072166501.jpg)
    导出后（NetManager.inst.request 是我自己封装的请求）：
    ![alt text](/src/assets/images/doc/1725072017396.jpg)

4. **软件设置了两种读取文件方式**
   分别对应了 Apifox 导出接口时提供的两种导出方式
   ![alt text](/src/assets/images/doc/1725072908548.jpg)

5. **添加不同服务**

有时候项目中后端伙伴会设置多个服务对应不同的需求，因此接口的请求 url 会有多个，此时就可以在服务中添加不同的 url。

-   由于 Apifox 导出后的 swagger 文件中，每个接口会定义在一个 tags 中，因此添加服务名时，服务名一定要和接口的 tag 对应上。**最简单直观的就是使用接口的父目录名**，例如：
    ![alt text](/src/assets/images/doc/Group.png)
