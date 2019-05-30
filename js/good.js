console.log("hello world"); //在控制台中输入 hello world
var webpage = require('webpage').create();
webpage.open('http://www.baidu.com') // 加载/打开一个页面
  .then(function(status){  
    webpage.viewportSize ={width:1500,height:980};     // 设置打开的页面大小为1500*980
    var dt = new Date(); //获取当前时间，js语法，js函数
    if(status == "success"){
      console.log("You Open The Web Of : " + webpage.title);
      webpage.render('image/'+dt.getHours()+dt.getMinutes()+dt.getSeconds()+'.png',
                   {onlyViewport:true}); //截图创建新的文件
    }else{
      console.log("The Web is not loaded");
    }
      return webpage.open('https://music.163.com/');    // 打开第二个页面 
  })
  .then(function(status){    
    var dt = new Date(); 
    if(status == "success"){
      console.log("You Open The Web Of : " + webpage.title);
      webpage.render('image/'+dt.getHours()+dt.getMinutes()+dt.getSeconds()+'.png',
                   {onlyViewport:true}); 
      webpage.sendEvent("click", 5, 5,'left', 0);  //发送一个单击时间 位置在左边的(5,5)处
    }else{
      console.log("The Web is not loaded");
    }
    webpage.close(); //把当前页面关闭
    slimer.exit(); //退出当前的控制台应用程序
  });
