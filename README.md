# fontImage
## 微信小程序-文字表情生成器 前端源码
## 小程序体验码：

### 根目录下config.js文件因包含接口秘钥等内容未上传git 内容如下：
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

### 根目录下project.config.json文件未上传git 内容如下：
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