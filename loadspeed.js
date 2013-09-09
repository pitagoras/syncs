var page = require('webpage').create(),
    system = require('system'),
    t, address;

    t = Date.now();

	
	
    address = "http://16.sync-playz.appspot.com/user1-aghbc/3.3-everyBatch_TARGET003.htm"; //これはcookなので、変えること。
    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('FAIL to load the address');
        } else {
            t = Date.now() - t;
            console.log('Page title is ' + page.evaluate(function () {
                return document.title;
            }));
            console.log('Loading time ' + t + ' msec');
        }
//        phantom.exit();
    });



	
	h = (new Date()).getHours();

	if((h >=  13) && (h < 14)){ // 22:00 - 23:00
	
    address = "http://16.sync-playz.appspot.com/user1-aghbc/3.3-Daily_TARGET.htm"; //これはcookなので、変えること。
    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('FAIL to load the address');
        } else {
            t = Date.now() - t;
            console.log('Page title is ' + page.evaluate(function () {
                return document.title;
            }));
            console.log('TIME: H:' + h );
        }	
//        phantom.exit();
    });
	
// Scoreを「かきまぜる」役目。	
    address = "http://16.sync-playz.appspot.com/user1-aghbc/3.3-everyBatch_Score_TARGET.htm"; //これはcookなので、変えること。
    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('FAIL to load the address');
        } else {
            t = Date.now() - t;
            console.log('Page title is ' + page.evaluate(function () {
                return document.title;
            }));
            console.log('Loading time ' + m);
        }
//        phantom.exit();
    });
	
	
// 日の出・日没時間の洗い替え。
    address = "http://16.sync-playz.appspot.com/user1-aghbc/3.3-everySun_TARGET003.htm"; //これはcookなので、変えること。
    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('FAIL to load the address');
        } else {
            t = Date.now() - t;
            console.log('Page title is ' + page.evaluate(function () {
                return document.title;
            }));
            console.log('Loading time ' + m);
        }
//        phantom.exit();
    });
	
	

	}


// _sleep(123456);	

	
	m = (new Date()).getMinutes();

	if((m >= 5) && (m <= 20)){
	
    address = "http://16.sync-playz.appspot.com/user1-aghbc/3.3-Weather_TARGET.htm"; //これはcookなので、変えること。
    page.open(address, function (status) {
        if (status !== 'success') {
            console.log('FAIL to load the address');
        } else {
            t = Date.now() - t;
            console.log('Page title is ' + page.evaluate(function () {
                return document.title;
            }));
            console.log('TIME: M:' + m);
        }
//        phantom.exit();
    });
	
	}
	
	
// _sleep(123456);




	
	
// function _sleep(time){
//	var d1 = new Date().getTime();
//	var d2 = new Date().getTime();
//	while( d2 < d1 + time ){
//		d2=new Date().getTime();
//	}
//	return;
// }
