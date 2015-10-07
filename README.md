
# colorcoded-bar

  A colorcoded bar.

  __Work in progress__

## Example

```js
var Bar = require('colorcoded-bar');

var bar = new Bar();

for (var i = 0; i < 100; i++) {
  bar.set(i, 'rgba(1, 1, 1, ' + i / 100 + ')');
}

bar.appendTo(document.body);
bar.render({ horizontal: false });
```

## Installation

```bash
$ npm install colorcoded-bar
```

## License

  MIT

