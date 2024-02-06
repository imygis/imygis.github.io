![iMyGIS平台](./assets/iMyGISPlatform.png)

# iMyGIS平台
iMyGIS平台 由 iMyGIS Group 维护。保留所有权利。

This project is actively developed by the iMyGIS Group. All Rights Reserved.

## 风险提示
若君欲用，风险自担。

## iMyGIS平台之工具集 GeographicDataToGeographicData.exe 工具 dwg/dxf/shp 转 GeoJSON
使用场景

将 dwg/dxf/shp 格式文件 转为 GeoJSON 格式文件

```
GeographicDataToGeographicData.exe --In=string --Out=string [options] ...
options:
  -i, --In                          输入文件存放路径 (string)
  -o, --Out                         输出文件存放路径 (string)
  -s, --SRSFrom                     输入文件坐标系EPSG (string [=])
  -d, --SRSTo                       输出文件坐标系EPSG (string [=EPSG:4326])
  -t, --InputDataType               输入文件类型 (string [=EsriShapefile])
  -u, --OutputDataType              输出文件类型 (string [=GeoJSON])
  -p, --SeparateModelProperties     模型属性分离开关: 属性内联的好处-管理简单 属性外挂的好处-数据量小 便于统计分析
  -g, --GenerateInnerProperties     生成内置属性
  -a, --ParsePropertyDoubleAsStr    将double类属性按照字符串解析以保证精度
  -?, --help                        print this message
```

使用举例

```
GeographicDataToGeographicData.exe --OutputDataPath=output/path/ --InputDataPath=input/path/to/xxx.shp

GeographicDataToGeographicData.exe -o output/path/ -i input/path/to/xxx.shp
```

## 交流、捐赠支持 Sponsors、贡献与参与 Contributing
关于iMyGIS平台，若有兴趣，联系作者。🌹

If you are interested, contact the author.

如果 iMyGIS平台 帮助到了您，您可以请作者喝杯咖啡表示鼓励 ☕️。

iMyGIS appreciates contributions of all kinds. We especially want to thank our fiscal sponsors who contribute to ongoing project maintenance.

我正在寻找新工作。如果您有兴趣雇佣我，请随时发送电子邮件到 imygis@sina.cn 📧

I am currently seeking funds to keep a roof over our head and looking for a new job. If you're interested in hiring me, please feel free to email me @ <imygis@sina.cn>

您也可以使用微信和QQ联系到我。✍

You can also use WeChat and QQ to reach me。

### 微信 wxid_doci96iau9un22
![WeChat](./assets/iMyGISGroup/WeChatBlue.jpg)

### QQ 交流群 901291659
![QQ](./assets/iMyGISGroup/QQ.jpg)


