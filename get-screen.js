/* You must use ./node_modules/.bin/phantomjs server-v4.js */
var system = require('system');
var page = require('webpage').create();
var args = system.args;

var url = 'http://www.charlin.be';
var screenSize = [1920,1080];
var cropCoordinates = [0, 0];
var finalSize = [256, 256];
var filename = 'result.png';

page.viewportSize = {
  width: screenSize[0],
  height: screenSize[1],
};

args.forEach(function (val, index) {
    if(index == 1){
        url = val;
    }
});

page.open(url, function(status){

    if(status == 'success'){

        page.clipRect = { top: cropCoordinates[0], left: cropCoordinates[1], width: finalSize[0], height: finalSize[1] };

        setTimeout(function() {
            page.render(filename);
            phantom.exit();
        }, 200);

    } else {
        console.log('Unable to load the address!');
    }

    
});
