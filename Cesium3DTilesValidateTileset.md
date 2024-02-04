![iMyGIS平台](./assets/iMyGISPlatform.png)

# iMyGIS平台

iMyGIS平台 由 iMyGIS Group 维护。保留所有权利。

This project is actively developed by the iMyGIS Group. All Rights Reserved.

## iMyGIS平台之工具集 Cesium3DTilesValidateTileset.exe 工具

[3d-tiles](https://github.com/CesiumGS/3d-tiles) 数据的使用越来越普遍，本工具可以用来调错、 分析、验证存量数据的合法性。

若数据正常，此工具会将多层级的tileset (eg: tileset.json) 文件合并为 单个文件，并输出到 OutputDataPath 指定的目录下，从而达到减少小文件数目并加快渲染效率的目的。

```
Cesium3DTilesValidateTileset.exe --InputDataPath=string --OutputDataPath=string [options] ...
options:
  -i, --InputDataPath     输入根文件tileset文件 eg: tileset.json (string)
  -o, --OutputDataPath    输出文件存放路径 (string)
  -?, --help              print this message
```

使用举例

```
Cesium3DTilesValidateTileset.exe --OutputDataPath=output/path/ --InputDataPath=input/path/to/tileset.json

Cesium3DTilesValidateTileset.exe -o output/path/ -i input/path/to/tileset.json
```

## 交流、捐赠支持 Sponsors、贡献与参与 Contributing
关于iMyGIS平台，若有兴趣，联系作者。🌹

If you are interested, contact the author.

如果 iMyGIS平台 帮助到了您，您可以请作者喝杯咖啡表示鼓励 ☕️。

iMyGIS appreciates contributions of all kinds. We especially want to thank our fiscal sponsors who contribute to ongoing project maintenance.

我正在寻找新工作。如果您有兴趣雇佣我，请随时发送电子邮件到 imygis@sina.cn 📧

I am currently seeking funds to keep a roof over our head and looking for a new job. If you're interested in hiring me, please feel free to email me @ <imygis@sina.cn>

您也可以使用微信和QQ联系到我。

You can also use WeChat and QQ to reach me。✍

### 微信 wxid_doci96iau9un22

![WeChat](./assets/iMyGISGroup/WeChatBlue.jpg)

### QQ 交流群 901291659

![QQ](./assets/iMyGISGroup/QQ.jpg)


