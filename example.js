var Bar = require('./');

var bar = new Bar();

for (var i = 0; i < 100; i++) {
  bar.set(i, 'rgba(1, 1, 1, ' + i / 100 + ')');
}

bar.appendTo(document.body);
bar.render();
