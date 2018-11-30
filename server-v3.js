/* ça à l'air de marcher */

const Jimp = require('jimp');
const Screenshot = require('url-to-screenshot')
const fs = require('fs')
 
new Screenshot('http://todomvc.com/')
  .width(1920)
  .height(1080)
  .capture()
  .then(function(img){
    fs.writeFileSync('example.png', img);
    console.log('crop example.png');

    Jimp.read('example.png', (err, lenna) => {
      if (err) throw err;
      lenna
        .crop(256, 256, 256, 256) // resize
        .quality(100) // set JPEG quality
        // .greyscale() // set greyscale
        .write('example.png'); // save
    });
  });
