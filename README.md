# image-rotater-eloise
To rotate selected imgs

Require "index.js" to call image-rotater module to rotate image by customize degree and quality

```
rotate(<PATH-OF-ORIGINAL-FOLDER>, <PATH-OF-OUTPUT-FOLDER>, <NUMBER-OF-DEGREES-TO-ROTATE>, <IMAGE-QUALITY>);

Default 
  origDir = path.join(__dirname, '../../images/orig/'), 
  distDir = path.join(__dirname, '../../images/dist/'),
  degree = 90, 
  quality = 60, 
you will be able to define your own when calling function
```