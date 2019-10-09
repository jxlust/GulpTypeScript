async function f1() {
    await get1();
    await get2();
    return await Promise.all([get1(), get2()]);
}

function get1() {
    return new Promise(resolve => setTimeout(() => {
        console.log(111111);
        resolve(0);
    }, 1000));
}

function get2() {
    return new Promise(resolve => setTimeout(() => {
        console.log(22222);
        resolve(9);
    }, 1000));
}

f1().then(data => console.log(data))


let dbobj = {
    post: function (p) {
        return new Promise( (resolve,reject) => setTimeout(() => {
            console.log('db',p);
            if(p.a === 3){
                reject('no');
            }else{
                resolve('1' + p.a);
            }
            
        }, 1000))
    }
}
async function dbFuc(db) {
    let obj = [{a:1},{a:2},{a:3}];
    let promises = obj.map((o) => db.post(o));
    try {
        let r =  await Promise.all(promises);
        console.log('r:',r);
        return r;    
    } catch (error) {
        console.log('e:',error);
    }
    
}
dbFuc(dbobj);