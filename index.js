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
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');
  var height = canvas.height = opts.height || 100;
  var width = canvas.width = opts.width || 100;
  var horizontal = opts.horizontal;
  var data = this._data;

  var slots = Array(horizontal
    ? width
    : height);
  for (var i = 0; i < slots.length; i++) {
    var offset = i / slots.length;
    var color = data[Math.floor(offset * data.length)] || pink;

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

  return canvas;
};

