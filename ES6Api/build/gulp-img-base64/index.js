/**
 * Created 2018/8/28.
 * 将图片url转为base64
 * @author joker.lee
 */

'use strict';
let through = require('through2');
let path = require('path');
let fs = require('fs');

module.exports = function(options) {
    let opts = options || {};
    let rule = opts.rule || /(<img.*?src=")(.*?\.png|jpe?g|gif|webp)(".*?>)/g || /url\([^\)]+\)/g;
    let initFileType = opts.filetype || 'html';
    let baseDir = opts.baseDir || '.';
    let currentPath = __dirname + '../../../' + baseDir;

    function transferImage(data){
        /* <img/> label 标签图片 */
        let imgRule = opts.rule || /(<img.*?src=")(.*?\.png|jpe?g|gif|webp)(".*?>)/g;
        let imgList = data.match(imgRule) || [];
        if (imgList.length) {
            imgList.forEach(function(item) {
                let imageURL = item.replace(imgRule, '$2');
                if (/^http|https:/.test(imageURL)) { /* 筛选过滤 */
                    return false;
                }
                let route = path.join(currentPath, imageURL);
                let filepath = fs.realpathSync(route);
                let extname = path.extname(imageURL).slice(1);
                let imageContent = new Buffer(fs.readFileSync(filepath)).toString('base64');
                data = data.replace(imageURL, 'data:image/' + extname.toLowerCase() + ';base64,' + imageContent);
            });
        }

        /* url('background-image') 背景图片*/
        let urlRule = opts.rule || /url\([^\)]+\)/g;
        let urlImgList = data.match(urlRule) || [];
        if (urlImgList.length) {
            urlImgList.forEach(function(item) {
                let imageURL = item.replace(/\(|\)|\'/g, '');
                imageURL = imageURL.replace(/^url/g, '');
                if (/^http|https:/.test(imageURL)) { /* 筛选过滤 */
                    return false;
                }
                let route = path.join(currentPath, imageURL);
                let filepath = fs.realpathSync(route);
                let extname = path.extname(imageURL).slice(1);
                let imageContent = new Buffer(fs.readFileSync(filepath)).toString('base64');
                data = data.replace(item, 'url(\'data:image/' + extname.toLowerCase() + ';base64,' + imageContent + '\')');
            });
        }

        return data;
    }

    function rebase(file, encoding, callback) {
        if (file.isNull()) {
            return callback(null, file);
        }
        if (file.isStream()) {
            return callback(createError(file, 'Streaming not supported'));
        }
        let content = file.contents.toString();
        content = transferImage(content);
        file.contents = new Buffer(content);
        this.push(file);
        callback(null, file);
    }
    return through.obj(rebase);
};

//配置
// let gulp = require('gulp');
// let base64 = require('./build/gulp-img-base64');



// /*
//  * 图片转base64
//  */
// gulp.task('base64', ['clean'], function () {
//     gulp.src('./src/view/*.html')
//         .pipe(base64())
//         .pipe(gulp.dest('./dist/view'));
// });
