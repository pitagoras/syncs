var page = require('webpage').create(),
    system = require('system'),
    t, address;

    t = Date.now();
	
    address = "http://16.sync-playz.appspot.com/user1-aghbc/3.3-everyBatch_TARGET.htm"; //これはcookなので、変えること。
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
        phantom.exit();
    });




	
	h = (new Date()).getHours();

	if((h >=  15) && (h < 16)){
	
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

	if((m >= 22) && (m <= 34)){
	
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
        phantom.exit();
    });

	}