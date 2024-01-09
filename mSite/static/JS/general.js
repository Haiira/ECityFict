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
    //setMainHeight()
}


var dataRelationship, dataGallery, dataDaydreams, dataCharacterM

function getRelationship(data){ dataRelationship = data }
function getImg(data){ dataGallery = data }
function getDaydreams(data){ dataDaydreams = data }
function getMarkdownForCharacter(data){ dataCharacterM = data }


// 设置Main组件高度
function setMainHeight( minus=0 ){
    let mainMinHeight = getWindowHeight()  - 50 - minus + "px"
    let mainHeight = getClientHeight() - 50 - minus + "px"
    try {
        my$("main").style.minHeight = mainMinHeight;
        my$("main").style.height = mainHeight;
    }
    catch(err) {
        console.log("[Notice] 此页面没有Main组件")
    }
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

// 获取文档的总高度（包含溢出隐藏）
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

// 获取文档的总高度（不包含溢出隐藏）
function getClientHeight() {
    var clientHeight = 0, bodyClientHeight = 0, documentClientHeight = 0;
    if (document.body) {
        bSH = document.body.clientHeight;
    }
    if (document.documentElement) {
        dSH = document.documentElement.clientHeight;
    }
    clientHeight = (bSH - dSH > 0) ? bSH : dSH;
    return clientHeight;
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

// 回滚到顶部
var isScroll = false
function myScrollTo( target, finished_time, interval_time ){
    // 到顶部完成时间finished_time,每interval_time向上运动一次，1000=1s，目标位置为target
    let scrollTop = getScrollTop()
    isScroll = false

    let timer = setInterval(() => {
        scrollTop -= scrollTop / finished_time * interval_time
        window.scrollTo(0, scrollTop)
        if (scrollTop <= target || isScroll){
            isScroll = false
            clearInterval(timer)
        }
    }, interval_time)
    for (let i = getScrollTop(); i >= 0; i--){
        document.body.scrollTop = document.documentElement.scrollTop = i
    }
}
window.addEventListener('wheel', (event) =>{ isScroll = true })
window.addEventListener('mousedown', (event) =>{ isScroll = true })
window.addEventListener('touchstart', (event) =>{ isScroll = true })
            

// 给list增加原型方法remove
Array.prototype.remove = function (str) {
    let cont = 0
    for (let i=0, n=0; i<this.length; i++){
        if (this[i] != str){
            this[n++] = this[i];
        }else{
            cont++;
        }
    }
    this.length -= cont;
    return this
}