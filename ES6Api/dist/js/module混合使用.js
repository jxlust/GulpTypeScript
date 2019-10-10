'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _moduleTest = require('./moduleTest');

Object.keys(_moduleTest).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _moduleTest[key];
        }
    });
});

// export {default} from './moduleTest';
var name = exports.name = 'll';
var log = exports.log = function log() {
    // ...
};
//# sourceMappingURL=module混合使用.js.map
