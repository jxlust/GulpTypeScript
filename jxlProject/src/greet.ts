var say = function(str:string):string{
    console.log(`i am export say:${str}`);
    var i = 1/0;
//    console.log('111',notdefined);
    return `export:${str}`;
}
export function saySome(str:string):string{
    console.log(`i am export saysome:${str}`);
    return `export:${str}`;
};
export {
    say
}