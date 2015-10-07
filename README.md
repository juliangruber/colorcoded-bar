
# colorcoded-bar

  A colorcoded bar.

## Example

  ![screenshot](screenshot.png)

```js
var Bar = require('colorcoded-bar');

// Vertical bar

(function(){
  var bar = new Bar();
  for (var i = 0; i < 100; i++) {
    bar.set(i, 'rgba(1, 1, 1, ' + i / 100 + ')');
  }
  document.body.appendChild(bar.render());
})();

// Horizontal bar

(function(){
  var bar = new Bar();
  for (var i = 0; i < 100; i++) {
    bar.set(i, 'rgba(1, 1, 1, ' + i / 100 + ')');
  }
  document.body.appendChild(bar.render({ horizontal: true }));
})();

// Automatic input scaling

(function(){
  var bar = new Bar();
  for (var i = 0; i < 10; i++) {
    bar.set(i, 'rgba(1, 1, 1, ' + i / 10 + ')');
  }
  document.body.appendChild(bar.render({ height: 200 }));
})();

// Pretty rainbows

(function(){
  var bar = new Bar();
  var height = 500;
  for (var i = 0; i < height; i++) {
    var color = 'hsl(' + Math.round(i / height * 360) + ', 100%, 50%)';
    bar.set(i, color);
  }
  document.body.appendChild(bar.render({ height: height }));
})();
```

  [![view on requirebin](http://requirebin.com/badge.png)](http://requirebin.com/?gist=88e975aa96d4481e0956)

## Installation

```bash
$ npm install colorcoded-bar
```

## License

  MIT

