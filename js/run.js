var page = require('webpage').create();
page.open("http://staging.nationalmap.nicta.com/#map=3d", function (status) {
    page.viewportSize = { width:1024, height:768 };
    slimer.wait(30000)
    page.render('image/screenshot2.png');
    slimer.exit();
});
