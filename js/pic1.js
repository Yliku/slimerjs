var page = require('webpage').create();
// page.clipRect={top:170, left:10, height: 330, width: 280};	// 对网页指定区域截图；设置页边距，从而获取想要的图片，需要慢慢调整
page.open("https://lorempixel.com/640/480/?97574 ", function (status) {
    page.viewportSize = { width:220, height:250 };
    slimer.wait(3000);
    var dt = new Date();	//js语法
    page.render('D:/wamp64/www/slimerjs-1.0.0/image/'+ dt.getTime()+'.png');
    slimer.exit();
});
