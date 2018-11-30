/* ça à l'air de marcher */

const Jimp = require('jimp');
const Screenshot = require('url-to-screenshot')
const fs = require('fs')

var url = 'http://todomvc.com/';

var screenSize = [1920,1080];
var cropCoordinates = [256, 256];
var finalSize = [256, 256];
var quality = 100;

var filename = 'result.png';

process.argv.forEach(function (val, index, array) {
  if(index == 2){
    url = val;
  }
});

new Screenshot(url)
  .width(screenSize[0])
  .height(screenSize[1])
  .capture()
  .then(function(img){
    fs.writeFileSync(filename, img);

    console.log('send to Jimp for cropping');

    Jimp.read(filename, (err, lenna) => {
      if (err) throw err;
      lenna
        .crop(cropCoordinates[0], cropCoordinates[1], finalSize[0], finalSize[1]) // resize
        .quality(quality) // set JPEG quality
        .write(filename); // save
    });
  });
