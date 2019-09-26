// 使用yield*语句遍历完全二叉树。

// 1.构造二叉树对象,左节点 当前节点 右节点
function Tree(left, label, right) {
    this.left = left;
    this.label = label;
    this.right = right;
}
// 2.生成二叉树
//2.1 采用递归生成二叉树
//2.2 这里是生成不完全二叉树方法实现
function createTree(arr) {
    if (Array.isArray(arr)) {
        if (arr.length === 1) {
            return new Tree(null, arr[0], null);
        } else if (arr.length === 2) {
            return new Tree(createTree(arr[0]), arr[1], null);
        } else if (arr.length > 2) {
            return new Tree(createTree(arr[0]), arr[1], createTree(arr[2]));
        }
    } else {
        return arr;
    }

}
//二叉树数组
// let treeArr = [
//     [1, 2], 3, [4, 5, 6]
// ];
let treeArr = [
    [
        ['a'], 'b', ['c']
    ], 'd', [
        ['e'], 'f', ['g']
    ]
];
//2.3 这里生成对象tree
let tree = createTree(treeArr);
console.log('生成二叉树对象：', tree);
// Tree {
//     left: Tree {
//         left: 1,
//         label: 2,
//         right: null
//     },
//     label: 3,
//     right: Tree {
//         left: 4,
//         label: 5,
//         right: 6
//     }
// }

//3.遍历二叉树对象 yield*
function* iteratorTree(t) {
    // console.log(t instanceof Tree);
    if (t instanceof Tree) {
        yield* iteratorTree(t.left);
        yield* iteratorTree(t.label);
        yield* iteratorTree(t.right);
    } else if(t){
        yield t;
    }
}
console.log([...iteratorTree(tree)]); //[ 1, 2, null, 3, 4, 5, 6 ]