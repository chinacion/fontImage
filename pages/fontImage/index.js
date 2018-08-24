//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
var mymd5 = require('../../utils/mymd5.js')

Page({
    data: {
        userInfo: {},
        logged: false,
        takeSession: false,
        requestResult: '',
        imageW: wx.getSystemInfoSync().windowWidth,
        imageH: wx.getSystemInfoSync().windowWidth/2,
        // 用户输入信息
        userInputText:'',
        textFont:1,
        imgUrl:'https://myxcxapi.ksd8.com/static/img/1525868197851972389.gif',
        // 文本颜色
        colorList: [
            {name: '黑体', value: '1', checked: 'true',img:'https://myxcxapi.ksd8.com/static/img/1525857875860218844.gif'},
            {name: '娃娃', value: '2',img:'https://myxcxapi.ksd8.com/static/img/1525857924701185927.gif'},
            {name: '少女', value: '3',img:'https://myxcxapi.ksd8.com/static/img/1525857947535915656.gif'},
            {name: '闪闪', value: '4',img:'https://myxcxapi.ksd8.com/static/img/152585796137809379.gif'},
            {name: '海报', value: '5',img:'https://myxcxapi.ksd8.com/static/img/1525857976799585299.gif'},
        ]
    },
    //获取用户输入的文字
    getUserInput:function(e)
    {
        this.setData({
            userInputText: e.detail.value,
        })
    },
    // 获取颜色单选框
    radioChange: function(e) {
        console.log('radio发生change事件，携带value值为：', e.detail.value)
    },
    // 获取单选文字框
    fontRadioChange: function(e) {
        this.setData({
            textFont: e.detail.value,
        })
    },
    // 提交用户输入文字 获取图片信息
    getFontImg: function(e)
    {
        util.showBusy('输入内容审核中...')
        var that = this
        var wei ;
        // console.log(that.data.userInputText)
        // console.log(that.data.textFont)
        if (that.data.userInputText=='') {
            util.showModel('生成失败','请输入要生成的文字！')
        }else{
            qcloud.request({
                url: config.service.getTextImgUrl,
                data: {
                    input_text: that.data.userInputText ,
                    sign: mymd5.md5(that.data.userInputText+config.signkey),
                    font_type: that.data.textFont
                },
                success(result) {
                    console.log(result.data)
                    if(result.data.code==0){
                        util.showSuccess('审核通过')
                        that.setData({
                            imgUrl: result.data.data.imgUrl,
                            imageW: wx.getSystemInfoSync().windowWidth,
                            imageH: result.data.data.img_height * wx.getSystemInfoSync().windowWidth / result.data.data.img_weight
                        })
                    }else{
                        util.showModel('生成失败', result.data.msg)
                    }   
                },
                fail(error) {
                    util.showModel('生成失败', error)
                    console.log('request fail', error)
                }
            })
        }

    },
    previewOutputImage: function(e) {
        // console.log(e)
        var current = e.target.dataset.src
        // console.log(current)
        // 点击图片预览
        wx.previewImage({
            // current: current, // 当前显示图片的http链接
            urls: [current], // 需要预览的图片http链接列表
      //       success: function() {
      //    　　　　util.showBusy('长按保存或发送')
      // 　　　　},
        })
    },
    // 切换是否带有登录态
    switchRequestMode: function (e) {
        this.setData({
            takeSession: e.detail.value
        })
        this.doRequest()
    },
    // pages/apps/largess/detail?accountId=311333
    appreciates: function(e) {
        wx.navigateToMiniProgram({
          appId: 'wx18a2ac992306a5a4',
          path: 'pages/apps/largess/detail?accountId=311333',
          extraData: {
            foo: 'bar'
          },
          envVersion: 'develop',
          success(res) {
            // 打开成功
          }
        })
    },
    

    doRequest: function () {
        util.showBusy('请求中...')
        var that = this
        var options = {
            url: config.service.requestUrl,
            login: true,
            success (result) {
                util.showSuccess('请求成功完成')
                console.log('request success', result)
                that.setData({
                    requestResult: JSON.stringify(result.data)
                })
            },
            fail (error) {
                util.showModel('请求失败', error);
                console.log('request fail', error);
            }
        }
        if (this.data.takeSession) {  // 使用 qcloud.request 带登录态登录
            qcloud.request(options)
        } else {    // 使用 wx.request 则不带登录态
            wx.request(options)
        }
    },


    // 预览图片
    previewImg: function () {
        wx.previewImage({
            current: this.data.imgUrl,
            urls: [this.data.imgUrl]
        })
    },
    onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '我只发图不说话',
      path: '/pages/fontImage/index',
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
  },

    // 切换信道的按钮
    switchChange: function (e) {
        var checked = e.detail.value

        if (checked) {
            this.openTunnel()
        } else {
            this.closeTunnel()
        }
    },

    openTunnel: function () {
        util.showBusy('信道连接中...')
        // 创建信道，需要给定后台服务地址
        var tunnel = this.tunnel = new qcloud.Tunnel(config.service.tunnelUrl)

        // 监听信道内置消息，包括 connect/close/reconnecting/reconnect/error
        tunnel.on('connect', () => {
            util.showSuccess('信道已连接')
            console.log('WebSocket 信道已连接')
            this.setData({ tunnelStatus: 'connected' })
        })

        tunnel.on('close', () => {
            util.showSuccess('信道已断开')
            console.log('WebSocket 信道已断开')
            this.setData({ tunnelStatus: 'closed' })
        })

        tunnel.on('reconnecting', () => {
            console.log('WebSocket 信道正在重连...')
            util.showBusy('正在重连')
        })

        tunnel.on('reconnect', () => {
            console.log('WebSocket 信道重连成功')
            util.showSuccess('重连成功')
        })

        tunnel.on('error', error => {
            util.showModel('信道发生错误', error)
            console.error('信道发生错误：', error)
        })

        // 监听自定义消息（服务器进行推送）
        tunnel.on('speak', speak => {
            util.showModel('信道消息', speak)
            console.log('收到说话消息：', speak)
        })

        // 打开信道
        tunnel.open()

        this.setData({ tunnelStatus: 'connecting' })
    },

    /**
     * 点击「发送消息」按钮，测试使用信道发送消息
     */
    sendMessage() {
        if (!this.data.tunnelStatus || !this.data.tunnelStatus === 'connected') return
        // 使用 tunnel.isActive() 来检测当前信道是否处于可用状态
        if (this.tunnel && this.tunnel.isActive()) {
            // 使用信道给服务器推送「speak」消息
            this.tunnel.emit('speak', {
                'word': 'I say something at ' + new Date(),
            });
        }
    },

    /**
     * 点击「关闭信道」按钮，关闭已经打开的信道
     */
    closeTunnel() {
        if (this.tunnel) {
            this.tunnel.close();
        }
        util.showBusy('信道连接中...')
        this.setData({ tunnelStatus: 'closed' })
    }
})
