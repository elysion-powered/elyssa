(function() {
  var __slice = [].slice;

  define('elyssa/collection', function() {
    var Collection;
    return Collection = (function() {
      function Collection() {}

      Collection.prototype.contructor = function(content) {
        this.data = {
          collection: {},
          state: {},
          proxies: {
            handler: {},
            keyHandler: {}
          }
        };
        if (content) {
          if (typeof content === 'string') {
            return this.fromString(content);
          } else {
            return this.set(content);
          }
        }
      };

      Collection.prototype.fromString = function(content) {
        return this.data.collection = JSON.parse(content);
      };

      Collection.prototype.toString = function() {
        return JSON.stringify(this.data.collection);
      };

      Collection.prototype.add = function(key, value, state) {
        if (state == null) {
          state = 'rw';
        }
        if (this.exists(key)) {
          return;
        }
        this.proxy('add', key, value);
        this.data.collection[key] = value;
        if (state === 'readonly' || state === 'read-only' || state === 'readOnly') {
          state = 'ro';
        }
        if (state === 'writeonly' || state === 'write-only' || state === 'writeOnly') {
          state = 'wo';
        }
        return this.data.state[key] = state;
      };

      Collection.prototype.exists = function(key) {
        this.proxy('exists', key);
        return Object.hasOwnProperty.call(this.data.collection, key);
      };

      Collection.prototype.has = Collection.exists;

      Collection.prototype.remove = function(key) {
        this.proxy('remove', key);
        return delete this.data.collection[key];
      };

      Collection.prototype.keys = function() {
        return Object.keys(this.data.collection);
      };

      Collection.prototype.on = function(name, key, proxyFn) {
        var _base, _base1;
        if (key && typeof key === 'string') {
          (_base = this.data.proxies.keyHandler)[name] || (_base[name] = {});
          return this.data.proxies.keyHandler[name][key] = proxyFn;
        } else {
          proxyFn = key;
          (_base1 = this.data.proxies.handler)[name] || (_base1[name] = []);
          return this.data.proxies.handler[name].push(proxyFn);
        }
      };

      Collection.prototype.off = function(name, key) {
        var _ref;
        if (key) {
          if (typeof key === 'number') {
            if (this.data.proxies.handler[name] != null) {
              return this.data.proxies.handler[name].splice(key, 1);
            }
          } else {
            if (((_ref = this.data.proxies.keyHandler[name]) != null ? _ref[key] : void 0) != null) {
              return delete this.data.proxies.keyHandler[name][key];
            }
          }
        } else {
          return delete this.data.proxies.handler[name];
        }
      };

      Collection.prototype.proxy = function() {
        var args, i, key, name, _i, _len, _ref, _ref1, _ref2;
        name = arguments[0], key = arguments[1], args = 3 <= arguments.length ? __slice.call(arguments, 2) : [];
        if (this.data.proxies.handler[name]) {
          _ref = this.data.proxies.handler[name];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            i = _ref[_i];
            i();
          }
        }
        if (key) {
          args.splice(0, 0, key);
          if (((_ref1 = this.data.proxies.keyHandler[name]) != null ? _ref1[key] : void 0) != null) {
            return (_ref2 = this.data.proxies.keyHandler[name])[key].apply(_ref2, args);
          }
        }
      };

      Collection.prototype.get = function(key) {
        if (data.state[key] !== 'wo') {
          this.proxy('get', key);
          return this.data.collection[key];
        } else {
          return void 0;
        }
      };

      Collection.prototype.set = function(key, value) {
        var k, v;
        if (value) {
          if (this.exists(key)) {
            if (this.data.state[key] !== 'ro') {
              this.data.collection[key] = value;
              this.proxy('set', key, value);
            }
          } else {
            this.add(key, value);
          }
        } else {
          for (k in key) {
            v = key[k];
            this.set.call(this, k, v);
          }
        }
        return null;
      };

      Collection.prototype.each = function(callback) {
        var key, value, _ref;
        _ref = this.data.collection;
        for (key in _ref) {
          value = _ref[key];
          callback(key, value);
        }
        return null;
      };

      Collection.prototype.map = function(callback) {
        var key, result, value, _ref;
        result = {};
        _ref = this.data.collection;
        for (key in _ref) {
          value = _ref[key];
          result[key] = callback(key, value);
        }
        return result;
      };

      Collection.prototype.filter = function(callback) {
        var key, result, value, _i, _len, _ref;
        result = {};
        _ref = this.data.collection;
        for (value = _i = 0, _len = _ref.length; _i < _len; value = ++_i) {
          key = _ref[value];
          if (!callback(this.data.collection[key])) {
            result[key] = this.data.collection[key];
          }
        }
        return result;
      };

      Collection.prototype.isEmpty = function() {
        return this.keys().length === 0;
      };

      return Collection;

    })();
  });

}).call(this);
