module.exports = Bar;

function Bar(){
  this._canvas = document.createElement('canvas');
  this._canvas.height = 100;
  this._canvas.width = 30;
  this._ctx = this._canvas.getContext('2d');
  this._data = {};
}

Bar.prototype.set = function(idx, color){
  this._data[idx] = color;
};

Bar.prototype.render = function(){
  var self = this;
  var canvas = this._canvas;
  var ctx = this._ctx;
  var height = canvas.height;
  var width = canvas.width;

  Object.keys(this._data).forEach(function(idx){
    var color = self._data[idx];
    var y = idx / 100 * height;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.strokeStyle = color;
    ctx.stroke();
  });
};

Bar.prototype.appendTo = function(el){
  el.appendChild(this._canvas);
};
