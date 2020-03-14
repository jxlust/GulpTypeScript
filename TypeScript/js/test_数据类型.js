"use strict";
{
    //1. 布尔值 boolean
    var isDone = false;
    //2. 数字 number
    var decLiteral = 6;
    var hexLiteral = 0xf00d;
    var binaryLiteral = 10;
    var octalLiteral = 484;
    //3.字符串 string
    var name_1 = "Gene";
    var sentence = "Hello, my name is " + name_1;
    //4.数组
    // 4.1 普通数组 类型[]
    var list = [1, 2, 3];
    // 4.2 泛型数组 Array<类型>
    var list2 = [1, 2, 3];
    var list2s = ['1', '2'];
    var list212 = [];
    list212.push(list2s);
    //list22 = [['a','b'],['c','d']]
    //5.元组 Tuple 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
    // Declare a tuple type
    var x = void 0;
    // Initialize it
    x = ["hello", 10]; // OK
    // Initialize it incorrectly
    //x = [10, 'hello']; // Error
    var x2 = [11, "hello", "world"];
    //6.枚举 enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
    var Color = void 0;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Blue"] = 1] = "Blue";
        Color[Color["Green"] = 2] = "Green";
    })(Color || (Color = {}));
    var c = Color.Red;
    console.log("enum", c);
    var Color2 = void 0;
    (function (Color2) {
        Color2[Color2["Red"] = 1] = "Red";
        Color2[Color2["Blue"] = 2] = "Blue";
        Color2[Color2["Green"] = 3] = "Green";
    })(Color2 || (Color2 = {}));
    var c2 = Color2.Green;
    console.log("enum2", c2);
    var colorName = Color2[2];
    console.log("枚举名字", colorName);
    //7.Any
    /**
     * 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查
     * 在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。
     * 你可能认为 Object有相似的作用，就像它在其它语言中那样。 但是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：
     */
    var notSure = 4;
    notSure = "maybe a string instead";
    notSure = false; // okay, definitely a boolean
    var notSure2 = 4;
    notSure2.ifItExists(); // okay, ifItExists might exist at runtime
    notSure2.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
    var prettySure = 4;
    prettySure.toString();
    //prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
    var listany = [1, true, "free"];
    listany[1] = 100;
    //8.Void
    /**
     * 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
     */
    var warnUser = function (params) {
        console.log(1111);
        return "";
    };
    //声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
    var unusable = undefined;
    //9.Null 和 Undefined
    // 也许在某处你想传入一个 string或null或undefined，你可以使用联合类型string | null | undefined。
    // Not much else we can assign to these variables!
    var u = undefined;
    var n = null;
    //10.Never 见下面方法
    // 返回never的函数必须存在无法达到的终点
    //11.Object 见下面方法
    /**
     * object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
      使用object类型，就可以更好的表示像Object.create这样的API。例如
     */
    //12. 类型断言
    /**
    类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
     */
    var someValue = [1, ''];
    var strLength = someValue.length;
    // 另一个为as语法：
    // let someValue: any = "this is a string";
    // let strLength: number = (someValue as string).length;
    //13.尽可能地使用let来代替var
}
function warnUserVoid2() {
    console.log("This is my warning message");
}
//10.Never
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    try {
        error("Something failed");
    }
    catch (error) {
        console.log("erro print", error);
    }
    console.log(222);
}
fail();
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) { }
}
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
//declare var jQuery: (selector: string) => any;
//console.log('test 声明',jQuery('#test'));
