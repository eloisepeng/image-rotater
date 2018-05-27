const fs = require('fs');
const path = require('path');
const http = require('http');
const Jimp = require('jimp');

const origDir = path.join(__dirname, '../../images/orig/');
const distDir = path.join(__dirname, '../../images/dist/');

// create dist folder if it doesn't exist
if (!fs.existsSync(distDir)){
  fs.mkdirSync(distDir);
};

module.exports = (
  origDir,
  distDir,
  degree = 180, 
  q = 60
) => {
  const files = fs.readdirSync(origDir);

  files.forEach(file => {
    Jimp.read(origDir + file).then(function (img) {
      img.rotate(degree).quality(q).write(distDir + file) 
    }).catch(function (err) {
      console.error(err);
    });
  })
}
