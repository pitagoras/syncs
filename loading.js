var page = require('webpage').create(),
    system = require('system'),
    t, address;

    t = Date.now();
	
    address1 = "http://16.sync-playz.appspot.com/user1-aghbc/3.3-everyBatch_TARGET003.htm";
    page.open(address1, function (status) {
        if (status !== 'success') {
            console.log('FAIL to load the address');
        } else {
            t = Date.now() - t;
            console.log('Page title is ' + page.evaluate(function () {
                return document.title;
            }));
            console.log('Loading time ' + t + ' msec');
        }
	phantom.exit();
    });		

	m = (new Date()).getMinutes();	
	h = (new Date()).getHours();

	if (h == 10) {
		if (m <= 10) { // 19:10 -
    address2 = "http://16.sync-playz.appspot.com/user1-aghbc/3.3-Daily_TARGET.htm";
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
	phantom.exit();
    });
	
		}
	}

	
	
	if (h == 11) {
		if (m <= 10) { // 20:10 -
// 日の出・日没時間の洗い替え。
    address3 = "http://16.sync-playz.appspot.com/user1-aghbc/3.3-everySun_TARGET003.htm";
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
	phantom.exit();
    });
		
		}
	}


	
	if (h == 12) {
		if (m <= 10) { // 21:10 -
// Scoreを「かきまぜる」役目。	
    address4 = "http://16.sync-playz.appspot.com/user1-aghbc/3.3-everyBatch_Score_TARGET.htm";
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
	phantom.exit();
    });
	
		}
	}



	if ( h%3 == 1 ) {	// 9時間差のため、偶数時に稼働 9時間差のため、4,7,10,13,16,19,22時に稼働
		if (m >= 30) {
			if (m <= 40){
	
    address5 = "http://16.sync-playz.appspot.com/user1-aghbc/3.3-Weather_TARGET.htm";
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
    phantom.exit();
			}
		}
	}