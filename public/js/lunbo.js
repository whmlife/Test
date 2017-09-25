//banner轮播
//大屏轮播
var options = {};//新建空对象
options.oDiv=document.getElementById("big-banner");//div的样式自己在样式表中定义
var imgs = ["img/lunbo1.jpg","img/lunbo2.jpg","img/lunbo3.jpg","img/lunbo1.jpg","img/lunbo2.jpg",];//传入图片地址
//设置对象属性
options.imgs = imgs;
options.hrefs=["#","#","#","#","#"];
options.height = "100%";
options.width = "100%";
options.ulName = "slider-ul";//轮播图ul的样式类名字
options.liName = "slider-li";//轮播图li的样式类名字
options.navName = "bnav";//小圆点的样式类名字
options.navActive = "active";//选中圆点时的样式 对应当前图片的圆点的样式
options.btnName = "btn";
var slider = new Slider(options);

//小屏轮播
var options1 = {};//新建空对象
options1.oDiv=document.getElementById("sm-banner");//div的样式自己在样式表中定义
var imgs = ["img/lunbo_1.jpg","img/lunbo_2.jpg","img/lunbo_3.jpg"];//传入图片地址
//设置对象属性
options1.imgs = imgs;
options1.hrefs=["#","#","#"];
options1.height = "100%";
options1.width = "100%";
options1.ulName = "slider-ul";//轮播图ul的样式类名字
options1.liName = "slider-li";//轮播图li的样式类名字
options1.navName = "bnav";//小圆点的样式类名字
options1.navActive = "active";//选中圆点时的样式 对应当前图片的圆点的样式
options1.btnName = "btn";
var slider = new Slider(options1);

//控制每块左侧文字的缓冲
