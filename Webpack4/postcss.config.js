module.exports = {
    plugins: [
        //自动添加css前缀
        require('autoprefixer'),
        // 转换rem  需 install postcss-plugin-px2rem
        // require('postcss-plugin-px2rem')({
        //     rootValue: 100,
        //     // rootValue: 75, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
        //     // unitPrecision: 5, //允许REM单位增长到的十进制数字。
        //     //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
        //     // propBlackList: [], //黑名单
        //     exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
        //     selectorBlackList: ['body','html'], //要忽略并保留为px的选择器
        //     // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
        //     // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
        //     mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
        //     minPixelValue: 2 //设置要替换的最小像素值(3px会被转rem)。 默认 0
        // }),
        require('postcss-px-to-viewport')({
            // 需要转换的单位，默认为"px"
            unitToConvert: 'px',
            // 设计稿的视口宽度, 将根据视口做比例换算
            viewportWidth: 750,
            // 转化精度，转换后保留位数
            unitPrecision: 2,
            // // 能转化为vw的属性列表
            // propList: [],
            // 希望使用的视口单位
            viewportUnit: 'vw',
            // 字体使用的视口单位
            fontViewportUnit: 'vw',
            // 需要忽略的CSS选择器
            selectorBlackList: [],
            // 最小的转换数值
            minPixelValue: 1,
            // 媒体查询里的单位是否需要转换单位
            mediaQuery: true,
            // 转换后是否添加备用单位
            replace: true,
            // 忽略文件目录
            exclude: /(node_module)/,
            // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
            landscape: false,
            // 横屏时使用的单位
            landscapeUnit: 'vh',
            // 横屏时使用的视口宽度
            landscapeWidth: 1334
        })
    ]
};