var webpage = require('webpage').create();
var url = phantom.args[0];		//命令行的第一个参数
var widthSize = phantom.args[1];
var heightSize = phantom.args[2];
var waitTime = phantom.args[3];
var picName = phantom.args[4];

webpage.open(url, function (status) {
    // webpage.viewportSize = { width:widthSize, height:heightSize };
    slimer.wait(waitTime);
    var dt = new Date();	//js语法
    webpage.render('./snapshotImage/'+ picName + dt.getTime()+'.png');
    slimer.exit();
});
