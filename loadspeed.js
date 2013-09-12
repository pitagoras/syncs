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
    });

	m = (new Date()).getMinutes();	
	h = (new Date()).getHours();

	if ((h = 1) && (m <= 10)) { // 10:00 - 11:00
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
	phantom.exit();
    });
	}
	
	m = (new Date()).getMinutes();
	h = (new Date()).getHours();
	
	if ((h = 2) && (m <= 10)) { // 11:00 - 12:00
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
	phantom.exit();
    });
	}
	
	m = (new Date()).getMinutes();	
	h = (new Date()).getHours();
	
	if ((h = 3) && (m <= 10)) { // 12:00 - 13:00
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
	phantom.exit();
    });
	}

	m = (new Date()).getMinutes();		

	if (m >= 50) {
	
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
    });
    phantom.exit();	
	}
