var page = require('webpage').create(),
    system = require('system'),
    t, address;

if (system.args.length === 1) {
    console.log('Usage: loadspeed.js http://3.sync-play.appspot.com/gaedirect?OFFSET=&LIMIT=&EQUAL=&NOT_EQUAL=&SORT=D00Score%3AASCENDING&LESS_THAN=in%3AD00Score%3A48465&LESS_THAN_OR_EQUAL=&GREATER_THAN=in%3AD00Score%3A30000&GREATER_THAN_OR_EQUAL=&IN=&rv=json&kind=SYNcPLaY&key=none&id=in%3AD00Score');
    phantom.exit(1);
} else {
    t = Date.now();
    address = system.args[1];
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
}
