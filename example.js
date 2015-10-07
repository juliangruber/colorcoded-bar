var Bar = require('./');

(function(){
  var bar = new Bar();
  for (var i = 0; i < 100; i++) {
    bar.set(i, 'rgba(1, 1, 1, ' + i / 100 + ')');
  }
  document.body.appendChild(bar.render());
})();

(function(){
  var bar = new Bar();
  for (var i = 0; i < 100; i++) {
    bar.set(i, 'rgba(1, 1, 1, ' + i / 100 + ')');
  }
  document.body.appendChild(bar.render({ horizontal: true }));
})();

(function(){
  var bar = new Bar();
  for (var i = 0; i < 10; i++) {
    bar.set(i, 'rgba(1, 1, 1, ' + i / 10 + ')');
  }
  document.body.appendChild(bar.render({ height: 200 }));
})();

(function(){
  var bar = new Bar();
  var height = 500;
  for (var i = 0; i < height; i++) {
    var color = 'hsl(' + Math.round(i / height * 360) + ', 100%, 50%)';
    bar.set(i, color);
  }
  document.body.appendChild(bar.render({ height: height }));
})();

