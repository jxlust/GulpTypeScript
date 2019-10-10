'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var name = exports.name = 'foo';
setTimeout(function () {
  return exports.name = name = 'bar';
}, 1000);
//# sourceMappingURL=moduleAsync.js.map
