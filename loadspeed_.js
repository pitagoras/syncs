var page = require('webpage').create(),
    system = require('system'),
    t, address;

    t = Date.now();

	m = (new Date()).getMinutes();	
	h = (new Date()).getHours();

	if (h == 14) {
		if (m >= 50) { // 23:50 -
    address2 = "http://16.sync-playz.appspot.com/user1-aghbc/3.3-Daily_TARGET.htm"; //これはcookなので、変えること。
    page.open(address2, function (status) {
        if (status !== 'success') {
            console.log('FAIL to load the address');
        } else {
            t = Date.now() - t;
            console.log('Page title is ' + page.evaluate(function () {
                return document.title;
            }));
            console.log('TIME: H:' + h );
        }
//	phantom.exit();
    });
	
		}
	}
	
	m = (new Date()).getMinutes();
	h = (new Date()).getHours();
	
	
	if (h == 15) {
		if (m <= 10) { // 24:10 -
// 日の出・日没時間の洗い替え。
    address3 = "http://16.sync-playz.appspot.com/user1-aghbc/3.3-everySun_TARGET003.htm"; //これはcookなので、変えること。
    page.open(address3, function (status) {
        if (status !== 'success') {
            console.log('FAIL to load the address');
        } else {
            t = Date.now() - t;
            console.log('Page title is ' + page.evaluate(function () {
                return document.title;
            }));
            console.log('Loading time ' + m);
        }
//	phantom.exit();
    });
		
		}
	}
	
	m = (new Date()).getMinutes();	
	h = (new Date()).getHours();
	
	if (h == 15) {
		if (m >= 50) { // 24:50 -
// Scoreを「かきまぜる」役目。	
    address4 = "http://16.sync-playz.appspot.com/user1-aghbc/3.3-everyBatch_Score_TARGET.htm"; //これはcookなので、変えること。
    page.open(address4, function (status) {
        if (status !== 'success') {
            console.log('FAIL to load the address');
        } else {
            t = Date.now() - t;
            console.log('Page title is ' + page.evaluate(function () {
                return document.title;
            }));
            console.log('Loading time ' + m);
        }
//	phantom.exit();
    });
	
		}
	}

	m = (new Date()).getMinutes();		

	if (m >= 50) {
	
    address5 = "http://16.sync-playz.appspot.com/user1-aghbc/3.3-Weather_TARGET.htm"; //これはcookなので、変えること。
    page.open(address5, function (status) {
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
//  phantom.exit();
	
	}