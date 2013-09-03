var page = require('webpage').create(),
    system = require('system'),
    t, address;

    t = Date.now();
		
	h = (new Date()).getHours();
	
    address = system.args[1]; //これはcookなので、変えること。
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
