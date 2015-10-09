var pink = 'rgb(255, 192, 203)';

module.exports = Bar;

function Bar(){
  this._data = [];
}

Bar.prototype.set = function(idx, color){
  this._data[idx] = color;
};

Bar.prototype.render = function(opts){
  opts = opts || {};

  var self = this;

  var canvas = opts.canvas || document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var horizontal = opts.horizontal;
  var data = this._data;

  var ratio = window.devicePixelRatio || 1;
  var height = opts.height || 100;
  var width = opts.width || 100;
  canvas.style.height = height + 'px';
  canvas.style.width = width + 'px';
  height = canvas.height = height * ratio;
  width = canvas.width = width * ratio;

  var length = horizontal
    ? width
    : height;
  var last;
  for (var i = 0; i < length; i++) {
    var offset = i / length;
    var color = data[Math.floor(offset * data.length)] || last || pink;
    last = color;

    var startX = horizontal
      ? Math.round(offset * width)
      : 0;
    var startY = horizontal
      ? 0
      : Math.round(offset * height);
    var endX = horizontal
      ? startX
      : width;
    var endY = horizontal
      ? height
      : startY;

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = color;
    ctx.stroke();
  }

  ctx.scale(ratio, ratio);
  return canvas;
};

