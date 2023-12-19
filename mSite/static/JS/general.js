// 自定义通过id获取元素
function my$(id){
    const res = document.getElementById(id)
    return res;
}

$(document).ready(function () {
    document.oncontextmenu = function () {
        return false
    }
    document.onselectstart = function () {
        return false
    }
    document.oncopy = function () {
        return false
    }
    document.ondragstart = function () {
        return false
    }
})

window.onload = function () {
    let mainMinHeight = getWindowHeight()  - 50 + "px"
    let mainHeight = getScrollHeight() - 50 + "px"
    my$("main").style.minHeight = mainMinHeight;
    my$("main").style.height = mainHeight;
}

/*
// 加载完成后关闭加载界面
window.onload = function () {
    my$("loading").style.display = 'none';
}
*/

/*
// 主网站地址
// var netAddr = 'http://www.ecityfict.com/'    // 服务器网址
var netAddr = 'http://127.0.0.1:8000/'  // 本地测试网址
*/

var dataRelationship

function getRelationship(data){
    dataRelationship = data
}

// 判断文件是否存在，向函数返回布尔值
function checkOut(func, addr) {

    return false
}

// 获取滚动条在Y轴上的滚动距离
function getScrollTop() {
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if (document.body) {
        bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return scrollTop;
}

// 获取文档的总高度
function getScrollHeight() {
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if (document.body) {
        bSH = document.body.scrollHeight;
    }
    if (document.documentElement) {
        dSH = document.documentElement.scrollHeight;
    }
    scrollHeight = (bSH - dSH > 0) ? bSH : dSH;
    return scrollHeight;
}

//获取浏览器视口的高度
function getWindowHeight() {
    var windowHeight = 0;
    if (document.compatMode == "CSS1Compat") {
        windowHeight = document.documentElement.clientHeight;
    } else {
        windowHeight = document.body.clientHeight;
    }
    return windowHeight;
}

//检查平台：PC、Pad、Phone
function checkAgent() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";

    if (!(bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM || bIsIpad)) {
        return 'PC';
    } else if (bIsIpad) {
        return 'Pad';
    } else {
        return 'Phone';
    }
}
