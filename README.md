
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

document.body.appendChild(bar.render{
  horizontal: false,
  height: 300,
  width: 50
});
```

## Installation

```bash
$ npm install colorcoded-bar
```

## License

  MIT

