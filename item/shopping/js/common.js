function my$(id) {
    return document.getElementById(id);
}
//设置
function setInnerText(element, text) {
    if (typeof element.innerText != "undefined") {
        element.innerText = text;
    } else {
        element.textContent = text;
    }
}
//获取
function getInnerText(element) {
    if (typeof element.innerText != "undefined") {
        return element.innerText
    } else {
        return element.textContent;
    }
}

//获取第一个子元素的兼容代码
function getFirstElementChild(element) {
    if (element.firstElementChild) {
        return element.firstElementChild;
    } else {
        var node = element.firstChild;
        while (node && node.nodeType != 1) {
            node = node.nextSibling;
        }
        return node;
    }
}
//获取最后一个子元素的兼容代码
function getLastElementChild(element) {
    if (element.lastElementChild) {
        return element.lastElementChild;
    } else {
        var node = element.lastChild;
        while (node && node.nodeType != 1) {
            node = node.previousSibling;
        }
        return node;
    }
}

//绑定事件的兼容代码
function addEventListener(element, type, fn) {
    if (element.addEventListener) {
        element.addEventListener(type, fn, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + type, fn);
    } else {
        element["on" + type] = fn;
    }
}
//解绑事件的代码
function removeEventListener(element, type, fnName) {
    if (element.removeEventListener) {
        element.removeEventListener(type, fnName, false);
    } else if (element.detachEvent) {
        element.detachEvent("on" + type, fnName);
    } else {
        element["on" + type] = null;
    }
}

//动画函数
function animaction(element, target) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var current = element.offsetLeft;
        var step = 9;
        step = current < target ? step : -step;
        current += step;
        if (Math.abs(target - current) > Math.abs(step)) {
            element.style.left = current + "px";
        } else {
            clearInterval(element.timeId);
            element.style.left = target + "px";
        }
    }, 10);
}

//变速动画函数
function animaction1(element, target) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var current = element.offsetLeft;
        var step = (target - current) / 10;
        step = target > current ? Math.ceil(step) : Math.floor(step);
        current += step;
        element.style.left = current + "px";
        if (current == target) {
            clearInterval(element.timeId);
        }
    }, 20);
}

//获取css样式
function getStyle(element, attr) {
    return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr] || 0;
}

//完整的动画函数
function animaction2(element, json, fn) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var flag = true;
        for (var attr in json) {
            if (attr == "opacity") {
                //获取当前透明度，当前的透明度放大100倍
                var current = getStyle(element, attr) * 100;
                //目标的透明度放大100倍
                var target = json[attr] * 100;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current / 100;
            } else if (attr == "zIndex") {
                element.style[attr] = json[attr];
            } else {
                var current = parseInt(getStyle(element, attr));
                var target = json[attr];
                var step = (target - current) / 10;
                step = target > current ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current + "px";
            }
            if (target != current) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(element.timeId);
            if (fn) {
                fn();
            }
        }
    }, 20);
}

function animate(element, json, fn) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function (){
        var flag = true;
        for(var attr in json){
            if(attr == "opacity"){
                var current = getStyle(element,attr) * 100;
                var target = json[attr] * 100;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current / 100;
            }else if(attr == "zIndex"){
                element.style[attr] = json[attr];
            }else{
                var current = parseInt(getStyle(element,attr));
                var target = json[attr];
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current + "px";
            }
            if(current != target){
                flag = false;
            }
        }
        if(flag){
            clearInterval(element.timeId);
            if(fn){
                fn();
            }
        }
    },20);
}




























