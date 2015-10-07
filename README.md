
# colorcoded-bar

  A colorcoded bar.

  __Work in progress__

## Example

```js
var Bar = require('colorcoded');

var bar = new Bar();

for (var i = 0; i < 100; i++) {
  bar.set(i, 'rgba(1, 1, 1, ' + i / 100 + ')');
}

bar.appendTo(document.body);
bar.render();
```

## Installation

```bash
$ npm install colorcoded-bar
```

## License

  MIT

