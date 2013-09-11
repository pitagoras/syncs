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

	if ((h = 14) && (m <= 12)) { // 22:00 - 23:00
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
    });
	
	}
	
	
	if ((h = 15) && (m <= 12)) { // 23:00 - 24:00
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
    });
	
	}

	
	if ((h = 16) && (m <= 12)) { // 24:00 - 25:00
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
    });
	
	}


	

	if (m >= 48) {
	
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
