'use strict';

var _moduleTest = require('./moduleTest');

var _moduleTest2 = _interopRequireDefault(_moduleTest);

var _moduleAsync = require('./moduleAsync');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import get, * as obj from './circle';
console.log('name:', _moduleTest.name);
console.log('sum:', (0, _moduleTest.add)(1, 2));
console.log('get:', (0, _moduleTest2.default)());
setTimeout(function () {
    console.log('asyn name', _moduleAsync.name); //bar
}, 2000);
//# sourceMappingURL=main.js.map
