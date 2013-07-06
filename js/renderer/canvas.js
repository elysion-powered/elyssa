(function() {
  define('elyssa/renderer/canvas', function() {
    'use strict';
    var Canvas;
    return Canvas = (function() {
      var context;

      context = null;

      function Canvas() {
        var canvasElement;
        this.name = 'Canvas';
        canvasElement = document.createElement('canvas');
        document.body.appendChild(canvasElement);
        context = canvasElement.getContext('2d');
      }

      Canvas.prototype.render = function(element) {};

      Canvas.prototype.clear = function() {
        return context.clearRect(0, 0, 0, 0);
      };

      return Canvas;

    })();
  });

}).call(this);
