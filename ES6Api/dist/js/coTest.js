'use strict';

//  import co from 'co';
var co = require('co');
console.log(co);

function read1(str) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('读取文件a' + str);
            resolve('\u8BFB\u53D6\u7684\u6587\u4EF6a\uFF1A' + str);
        }, 1000);
    });
}
function read2(str) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('读取文件b' + str);
            resolve('\u8BFB\u53D6\u7684\u6587\u4EF6b\uFF1A' + str);
        }, 2000);
    });
}
var gen = /*#__PURE__*/regeneratorRuntime.mark(function gen() {
    var r1, r2;
    return regeneratorRuntime.wrap(function gen$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return read1('1.txt');

                case 2:
                    r1 = _context.sent;
                    _context.next = 5;
                    return read2('2.txt' + r1);

                case 5:
                    r2 = _context.sent;

                    console.log('r1:', r1);
                    console.log('r2:', r2);
                    return _context.abrupt('return', 100);

                case 9:
                case 'end':
                    return _context.stop();
            }
        }
    }, gen, this);
});
co(gen).then(function (data) {
    console.log(1, data);
});
//# sourceMappingURL=coTest.js.map
