# js-image-generator

This is a node module for generating random images.

 - Works platform independent
 - Needs no building thanks to jpeg-js
 - Generates random colored, noisy images

I needed this for creating dummy datasets including images in combination with faker.js and / or choice.js

Uses the jpeg-js library: https://github.com/eugeneware/jpeg-js

## Installation
```bash
npm install js-image-generator
```

## Example Usage

```js
var fs = require('fs');
var imgGen = require('js-image-generator');

// Generate one image
imgGen.generateImage(800, 600, 80, function(err, image) {
    fs.writeFileSync('dummy.jpg', image.data);
});

// Generate multiple images
for(var i=1;i<=10;i++){
    imgGen.generateImage(800, 600, 80, function(err, image) {
        console.log("Generating image #" +i);
        fs.writeFileSync('dummy-' + i + '.jpg', image.data);
    });
}
```
