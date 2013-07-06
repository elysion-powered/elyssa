(function() {
  (function(window) {
    'use strict';
    /*
      Console object fixes
    */

    var console, i, method, methods, noop, _i, _len, _results;
    noop = function() {};
    methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
    console = (window.console || (window.console = {}));
    _results = [];
    for (_i = 0, _len = methods.length; _i < _len; _i++) {
      i = methods[_i];
      method = methods[i];
      _results.push(console[method] || (console[method] = noop));
    }
    return _results;
  })(this);

}).call(this);
