'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var obj = { name: 'q', age: 2 };
for (var value in obj) {
	if (_typeof(obj[value]) === 'object') {
		//constantize(obj[value]);
	}
}
'sss '.trim();
