{
    let input :any[];
    input = ['a',1,'bb',2];
    let [first,last] = input;
    console.log('first',first);
    console.log('last',last);
    let o = {
        a: "foo",
        b: 12,
        c: "bar"
    };
    //let { a, b } = o;
    let { a, ...passthrough } = o;
    let total = passthrough.b + passthrough.c.length;
    //let { a: newName1, b: newName2 } = o;
    let { a: newName1, b: newName2 }:{a:string,b:number} = o;
    console.log('new',`${newName1}-${newName2} `);
    console.log('new2',`${a} `);

    //展开表达式
    let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
    let search = { food: "rich", ...defaults };
    // let first = [1, 2];
    // let second = [3, 4];
    // let bothPlus = [0, ...first, ...second, 5];
    //这会令bothPlus的值为[0, 1, 2, 3, 4, 5]。 展开操作创建了 first和second的一份浅拷贝。 它们不会被展开操作所改变。
}
function f([first, second]: [string,number] = ['a',1]) {
    console.log(first);
    console.log(second);
}
f()
function f2({first, second}: {first:string,second?:number} = {first:'小流年',second:12}) {
    console.log(first);
    console.log(second);
}
f2({first:'b'});

function f3([first,...second]) {
    console.log(first);
    console.log(second);
}
f3([1,234]);
