(function() {
  (function(String) {
    /*
      Provides a hashcode for strings
    */

    return String.prototype.hashCode = function() {
      var char, hash, i, _i, _len;
      hash = 0;
      if (this.length === 0) {
        return hash;
      }
      for (_i = 0, _len = this.length; _i < _len; _i++) {
        i = this[_i];
        char = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
      }
      return hash;
    };
  })(String);

}).call(this);
