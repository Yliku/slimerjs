var webpage = require('webpage').create();
var url = phantom.args[0];		//命令行的第一个参数
var waitTime = phantom.args[1];
var picName = phantom.args[2];
var savePath = phantom.args[3];
// var widthSize = phantom.args[3];
// var heightSize = phantom.args[4];

webpage.open(url, function (status) {
    // webpage.viewportSize = { width:widthSize, height:heightSize };	//截图窗口预览的大小
    slimer.wait(waitTime);
    var dt = new Date();	//js语法
    webpage.render(savePath + '/'+ dt.getTime() + picName + '.png');
    //文件保存的相对路径是相对于执行该命令的窗口的路径，在laravel中也就是能执行 artisan命令，即是laravel项目的路径
    slimer.exit();
});
