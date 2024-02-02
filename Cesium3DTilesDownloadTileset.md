![iMyGIS平台](./assets/iMyGISPlatform.png)

# iMyGIS平台

iMyGIS平台 由 iMyGIS Group 维护。保留所有权利。

This project is actively developed by the iMyGIS Group. All Rights Reserved.

## 风险提示
若君欲用，风险自担。

## iMyGIS平台之工具集 Cesium3DTilesDownloadTileset.exe 工具

[3d-tiles](https://github.com/CesiumGS/3d-tiles) 是针对三维地理空间数据，如摄影测量、三维建筑、BIM/CAD、实例化要素、点云等进行流处理和渲染而开发的数据格式。它基于传输可渲染的层级数据结构和瓦片格式集。

[3d-tiles](https://github.com/CesiumGS/3d-tiles) 数据的使用越来越普遍。

指定根索引文件 xxx.json (eg: tileset.json) 后，此工具会从网络下载tileset 数据集，并存储到 OutputDataPath 指定的目录下。若下载数据需要认证，请联系作者定制工具。

```
Cesium3DTilesDownloadTileset.exe --InputDataPath=string --OutputDataPath=string [options] ...
options:
  -i, --InputDataPath     输入文件(网络文件)，为根索引文件 xxx.json (string)
  -o, --OutputDataPath    输出文件存放路径 (string)
  -?, --help              print this message
```

使用举例

```
Cesium3DTilesDownloadTileset.exe --OutputDataPath=output/path/ --InputDataPath=network/path/to/tileset.json

Cesium3DTilesDownloadTileset.exe -o output/path/ -i network/path/to/tileset.json
```

## 交流、捐赠支持 Sponsors、贡献与参与 Contributing

关于iMyGIS平台，若有兴趣，联系作者。

If you are interested, contact the author.

如果 iMyGIS平台 帮助到了您，您可以请作者喝杯咖啡表示鼓励 ☕️。

iMyGIS appreciates contributions of all kinds. We especially want to thank our fiscal sponsors who contribute to ongoing project maintenance.

我正在寻找新工作。如果您有兴趣雇佣我，请随时发送电子邮件到 imygis@sina.cn

I am currently seeking funds to keep a roof over our head and looking for a new job. If you're interested in hiring me, please feel free to email me @ <imygis@sina.cn>

您也可以使用微信和QQ联系到我。

You can also use WeChat and QQ to reach me。

### 微信 wxid_doci96iau9un22

![WeChat](./assets/iMyGISGroup/WeChatBlue.jpg)

### QQ 交流群 901291659

![QQ](./assets/iMyGISGroup/QQ.jpg)


