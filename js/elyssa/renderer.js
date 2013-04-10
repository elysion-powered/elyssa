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

(function() {

  define('elyssa/renderer/dom', function() {
    'use strict';
    var DOM;
    return DOM = (function() {

      function DOM() {
        this.name = 'DOM';
      }

      DOM.prototype.clear = function() {};

      return DOM;

    })();
  });

}).call(this);

(function() {

  define('elyssa/renderer', function() {
    'use strict';
    var Renderer;
    return Renderer = (function() {
      var bind, functionNames, setMethods, source;

      functionNames = ['drawLine', 'drawPoint', 'drawTexture', 'clear'];

      source = null;

      bind = function(func, context) {
        if (func != null) {
          return func.apply(context, arguments);
        }
      };

      setMethods = function(context, methodArray, source) {
        var method, _i, _len, _results;
        _results = [];
        for (_i = 0, _len = methodArray.length; _i < _len; _i++) {
          method = methodArray[_i];
          if (!source[method]) {
            console.log("Renderer " + source.name + " does not implement function " + method);
          }
          _results.push((function(method) {
            return context[method] = function() {
              return bind(source[method](context));
            };
          })(method));
        }
        return _results;
      };

      function Renderer(source) {
        if (!source) {
          console.log('Please specify a renderer implementation');
        } else {
          setMethods(this, functionNames, source);
        }
      }

      return Renderer;

    })();
  });

}).call(this);

(function() {

  define('elyssa/renderer/svg', function() {
    'use strict';
    var SVG;
    return SVG = (function() {

      function SVG() {
        this.name = 'SVG';
      }

      SVG.prototype.clear = function() {};

      return SVG;

    })();
  });

}).call(this);
