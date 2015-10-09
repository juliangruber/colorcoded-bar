var Bar = require('./');
var insertCSS = require('insert-css');

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

// Animations

(function(){
  var canvas = document.createElement('canvas');
  document.body.appendChild(canvas);

  var height = 500;
  var off = 0;

  setInterval(function(){
    var bar = new Bar;
    for (var i = 0; i < height; i++) {
      var color = 'hsl(' + (Math.round(i / height * 360) + off % 360) + ', 100%, 50%)';
      off += 0.005;
      bar.set(i, color);
    }
    bar.render({ canvas: canvas, height: height });
  }, 10);
})();

// Holes

(function(){
  var bar = new Bar();
  bar.set(100, '');
  bar.set(25, 'gray');
  bar.set(75, 'red');
  document.body.appendChild(bar.render());
})();

insertCSS('body { margin: 50px 100px }');
document.title = 'colorcoded-bar';
