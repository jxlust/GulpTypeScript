const _name = new WeakMap();

class Person {
    constructor(name) {
        _name.set(this, name);
    }
    get name() {
        return _name.get(this);
    }
    getName() {
        return 'i am name...';
    }
}

const jane = new Person('Jane');
console.log(1, jane.name); // 'Jane'

const proxy = new Proxy(jane, {});

console.log(2, proxy.name);
// proxy.name // undefined

// 如果需要获取 拦截器中 可以绑定this
let handler = {
    get: function (target, key, receiver) {
        if (key === 'name') {
            return target.name;
        }
        if (key === 'getName') {
            return target.getName.bind(target);
        }
        return Reflect.get(target, key);
    }
}
const proxy2 = new Proxy(jane, handler);
console.log(21, proxy2.name);

console.log(22, proxy2.getName());

//使用
// Proxy 对象可以拦截目标对象的任意属性，这使得它很合适用来写 Web 服务的客户端。
// 1.创建service接口

// 上面代码新建了一个 Web 服务的接口，这个接口返回各种数据。Proxy 可以拦截这个对象的任意属性，所以不用为每一种数据写一个适配方法，只要写一个 Proxy 拦截就可以了。
const service = createWebService('http://example.com/data');

service.employees().then(json => {
    console.log('json', json);
     const employees = JSON.parse(json);
     console.log(employees);

}).catch(e => {
    console.log('错误', e)
});

function createWebService(baseUrl) {
    return new Proxy({}, {
        get(target, propKey, receiver) {
            return () => httpGet(baseUrl + '/' + propKey);
        }
    });
}
function httpGet(url) {
    console.log('url', url);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (typeof url === 'string') {
                let objstr = '{"name": "lili","sex":1,"age":12}';
                resolve(objstr);
            } else {
                reject('error');
            }
        }, 2000)

        // $.ajax({
        //     type: "GET",
        //     url: url,
        //     data: {},
        //     dataType: "json",
        //     success: function (response) {
        //         console.log(response);

        //     },
        //     error: function (e) {
        //         console.error(e);
        //         throw new Error(e);
        //     }

        // });    
    })

}