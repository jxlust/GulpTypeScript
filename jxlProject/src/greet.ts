var say = function(str:string):string{
    console.log(`i am export say:${str}`);
    return `export:${str}`;
}
export function saySome(str:string):string{
    console.log(`i am export saysome:${str}`);
    return `export:${str}`;
};
export {
    say
}