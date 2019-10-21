

var shareApi = "http://api.jimingkeji.com.cn/wechat/?service=Share.index&wechat_type=jm_prod";
var shareTitle = "分享标题";
var shareDesc = "分享描述";
// var shareLink = location.href.split("#")[0];
var _link = location.href;
if (_link.indexOf("index.html") >= 0) {
    _link = location.href.split("?")[0].slice(0, -10);
}

shareLink = location.href;
var shareImg = _link + "resource/share.jpg";
$(function () {
    setupJSSDK()

})
function setupJSSDK(apiList = ["onMenuShareTimeline", "onMenuShareAppMessage"]) {
    //alert("获取签名成功!");

    __http(shareApi, {}, function (res) {
        // console.log(res);
        var result = res.data.content;

        //公司域名
        wx.config({
            debug: false,
            appId: result['appId'],
            timestamp: result['timestamp'],
            nonceStr: result['nonceStr'],
            signature: result['signature'],
            jsApiList: apiList
        });
      
        readyHandler()
    })

}

function readyHandler() {
    wx.ready(function () {
        console.log("wx ready!");
        wx.onMenuShareTimeline({
            title: shareTitle,
            link: shareLink,
            imgUrl: shareImg,
            //新增的
            success: function (e) {
                console.log(shareLink)
            },
            cancel: function () { }
        });
        wx.onMenuShareAppMessage({
            title: shareTitle,
            desc: shareDesc,
            link: shareLink,
            imgUrl: shareImg,
            type: 'link',
            dataUrl: '',
            success: function () {
                console.log("分享成功")
                console.log(shareLink)
            },
            cancel: function () { }
        })
    })
}

function __http(_url, _data, _callback) {
    var reqData = {};
    console.log(_url)
    reqData.params = _data;
    $.ajax({
        type: "GET",
        dataType: "json",
        url: _url,
        async: true,
        data: {
            "requestObj": JSON.stringify(reqData)
        },
        success: function (data) {
            if (_callback) {
                console.log(data);
                _callback(data);
            }
        },
        error: function (error) {
            console.log(JSON.stringify(error));
        }
    })

}