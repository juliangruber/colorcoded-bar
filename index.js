module.exports = Bar;

function Bar(){
  this._canvas = document.createElement('canvas');
  this._canvas.height = 100;
  this._canvas.width = 100;
  this._ctx = this._canvas.getContext('2d');
  this._data = {};
}

Bar.prototype.set = function(idx, color){
  this._data[idx] = color;
};

Bar.prototype.render = function(opts){
  opts = opts || {};

  var self = this;
  var canvas = this._canvas;
  var ctx = this._ctx;
  var height = canvas.height;
  var width = canvas.width;
  var horizontal = opts.horizontal;

  Object.keys(this._data).forEach(function(idx){
    var color = self._data[idx];
    var offset = idx / 100;

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
  });
};

Bar.prototype.appendTo = function(el){
  el.appendChild(this._canvas);
};
