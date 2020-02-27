var bannerImg = my$("bannerimg").children[0].children;
var bannerPager = my$("banner-pager");
var pic = 0;
var flag = true;
for(var i = 0; i < bannerImg.length; i++){
    //遍历banner图的最大数,来创建相对应的焦点按钮
    var liObj = document.createElement("li");
    bannerPager.appendChild(liObj);
    bannerPager.children[i].setAttribute("pic",i);
    //遍历焦点按钮，给每个按钮添加点击事件
    liObj.onclick = function (){
        if(flag){
            flag = false;
            //通过自定义的属性来获取相对应的图片索引
            pic = this.getAttribute("pic");
            console.log(pic);
            //把所有的焦点按钮全部遍历为未选中状态
            for(var i = 0; i < bannerPager.children.length; i++){
                bannerPager.children[i].className = "";
            }
            //选中被点击的焦点按钮
            bannerPager.children[pic].className = "ban-pager-hover";
            //遍历放置banner图的li，把所有的li的opacity属性全部为0
            bannerImgNone();
            //调用动画函数把对应的li的opacity属性设为1;
            animate(bannerImg[pic],{"opacity":1},function(){
                flag = true;
            });
            
        }
    }
    function bannerImgNone(){
        for(var j = 0; j < bannerImg.length; j++){
            animate(bannerImg[j],{"opacity":0});
        }
    }
    
}

//隐藏所有的图片
bannerImgNone();
//显示第一张
animate(bannerImg[0],{"opacity":1});
//选中第一个焦点按钮
bannerPager.children[0].className = "ban-pager-hover";

//previous按钮
my$("banner-previous").onclick = function (){
    //if判断是为了让轮播图还没完成换图的时候被点击再换图
    //也就是说这样写的话要等到动画结束后才可以进行下一次动画
    if(flag){
        if(pic == 0){
            pic = 5;
        }
        flag = false;
        pic--;
        console.log(pic);
        //把所有的焦点按钮全部遍历为未选中状态
        for(var i = 0; i < bannerPager.children.length; i++){
            bannerPager.children[i].className = "";
        }
        //选中被点击的焦点按钮
        bannerPager.children[pic].className = "ban-pager-hover";
        //遍历放置banner图的li，把所有的li的opacity属性全部为0
        bannerImgNone();
        //调用动画函数把对应的li的opacity属性设为1;
        animate(bannerImg[pic],{"opacity":1},function(){
            flag = true;
        });
    }
}
//next按钮
my$("banner-next").onclick = bannerAnimate;
function bannerAnimate(){
    //if判断是为了让轮播图还没完成换图的时候被点击再换图
    //也就是说这样写的话要等到动画结束后才可以进行下一次动画
    if(flag){
        if(pic == 4){
            pic = -1;
        }
        flag = false;
        pic++;
        console.log(pic);
        //把所有的焦点按钮全部遍历为未选中状态
        for(var i = 0; i < bannerPager.children.length; i++){
            bannerPager.children[i].className = "";
        }
        //选中被点击的焦点按钮
        bannerPager.children[pic].className = "ban-pager-hover";
        //遍历放置banner图的li，把所有的li的opacity属性全部为0
        bannerImgNone();
        //调用动画函数把对应的li的opacity属性设为1;
        animate(bannerImg[pic],{"opacity":1},function(){
            flag = true;
        }); 
    }   
}

var timeId = setInterval(function(){
    bannerAnimate();
},4000);
my$("bannerimg").onmouseover = function (){
    clearInterval(timeId);
};
my$("bannerimg").onmouseout = function (){
    timeId = setInterval(function (){
        bannerAnimate();
    },4000);
};