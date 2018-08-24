## fontImage 微信小程序-文字表情生成器 前端源码
### 小程序体验码：
![code](data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAGIAVgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoor+VegD+qiiv5V6KAP6qKK/lXooA/qoor+VeigD+qiiiv5V6AP6qKKK/lXoA/qoor+VeigD+qiiv5V6/qooAKKK/lXoA/qooor+VegD+qiiiv5V6AP6qKK/lXr+qigAooooAKK/lXr+qigAoor+VegD+qiiiv5V6AP6qKK/lXooA/qoor+VeigD+qiiv5V6KAP6qKKKKACiiigAooooAK/lXr+qiv5V6AP6qKKK/lXoA/qoor+VeigD+qiv5V6/qor+VegD+qiiiigAr+VeiigD+qiiv5V6/qooA/lXoor+qigD+Vev6qK/lXooA/qor+Vev6qK/lXoA/qor+Vev6qKKACv5V6KKACiiv6qKAP5V6K/qor+VegAor+qiigAr+Vev6qK/lXoA/qooor+VegD+qiiv5V6KAP6qK/lXr+qiv5V6AP6qKKKKACiiigAooooAK/lXr+qiv5V6AP6qK/lXr+qiv5V6ACiiigD+qiv5V6/qor+VegD+qiiiv5V6AP6qKKK/lXoAKKKKACiv6qK/lXoAKKK/qooA/lXr+qiv5V6KACv6qK/lXr+qigAr+Vev6qKKAP5V6/qor+Vev6qKAP5V6/qor+Vev6qKAP5V6/qooooAK/lXr+qiv5V6AP6qK/lXr+qiv5V6ACiiigD+qiv5V6/qor+VegD+qiiiigAooooAKKKKACv5V6/qor+VegD+qiiv5V6KAP6qKK/lXooA/qor+VeiigD+qiv5V6/qor+VegAor+qiv5V6AP6qKKK/lXoA/qor+Vev6qK/lXoA/qor+Vev6qK/lXoA/qooor+VegAr+qiiv5V6AP6qK/lXr+qiv5V6AP6qKKK/lXoAKK/qor+VegAor+qiv5V6AP6qK/lXr+qiv5V6AP6qKK/lXooA/qoor+VeigD+qiv5V6KKAP6qKKKKACiiigAooooAKKKKACiv5V6KAP6qKK/lXooA/qoor+VeigD+qiiv5V6/qooAK/lXor+qigD+Veiiv6qKACv5V6/qoooAK/lXoooAKKKKACv6qK/lXr+qigD+Veiv6qK/lXoA/qor+VeiigAr+qiiv5V6AP6qK/lXr+qiigAooooAKK/lXooA/qoooooAKKK/lXoA/qoooooAKKKKACiiigAr+Vev6qKKAP5V6K/qor+VegD+qiiv5V6KACv6qKK/lXoA/qor+Vev6qKKAP5V6K/qor+VegD+qiiv5V6/qooA/lXoor+qigAoor+VegAr+qiiigD+Vev6qK/lXr+qigD+VeiiigAor+qiigD+Vev6qK/lXooAK/qor+Vev6qKAP5V6K/qor+VegAr+qiiv5V6ACv6qK/lXr+qigAor+VeigD+qiiiigAooooAKKKKACv5V6/qor+VegAr+qiiv5V6ACv6qKKKACiv5V6KACiv6qKKAP5V6KK/qoo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)
### 根目录下config.js文件因包含接口秘钥等内容未上传 内容如下：
```php
/**
 * 小程序配置文件
 */

// 后端服务请求域名
var host = 'https://myxcxapi.ksd8.com';

var config = {

    // 下面的地址配合云端 Demo 工作
    service: {
        host,

        // 获取文字生成的图片图片接口
        getTextImgUrl: `${host}/myxcxapi/createTextImg`
    },
    
    // 请求密钥
    signkey : '---'
};

module.exports = config;
```

### 根目录下project.config.json文件未上传 内容如下：
```php
{
    "description": "项目配置文件。",
    "packOptions": {
        "ignore": []
    },
    "setting": {
        "urlCheck": true,
        "es6": true,
        "postcss": true,
        "minified": true,
        "newFeature": true
    },
    "compileType": "miniprogram",
    "libVersion": "2.0.4",
    "appid": "---",
    "projectname": "fontImage",
    "isGameTourist": false,
    "condition": {
        "search": {
            "current": -1,
            "list": []
        },
        "conversation": {
            "current": -1,
            "list": []
        },
        "game": {
            "currentL": -1,
            "list": []
        },
        "miniprogram": {
            "current": -1,
            "list": []
        }
    }
}
```
