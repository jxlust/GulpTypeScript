var gulp = require('gulp');
var sass = require('gulp-sass');
var rename=require('gulp-rename');
var base64 = require('gulp-base64');
var browserSync = require('browser-sync');
var babel = require('gulp-babel');
var reload = browserSync.reload;
//混淆
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps'); //生成的sourcemap文件可以方便调试压缩后的代码
var buffer = require('vinyl-buffer'); //配合sourcemap
var autoprefixer = require("gulp-autoprefixer"); //浏览器前缀自动补齐 
var minifyCss = require("gulp-clean-css");
//编译模块代码
var webpack = require('webpack-stream');
var named = require('vinyl-named');
var webpackConfig = require("./webpack.config.js");

function swallowError(error) {
    // If you want details of the error in the console
    console.error(error.toString())

    this.emit('end')
}


gulp.task('sass', function () {
    gulp.src('src/scss/*.scss')
        .pipe(rename({suffix:'.min'}))
        .pipe(base64())
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true
        }))
        .pipe(sass())
        .on('error', swallowError)
        // 浏览器前缀补全    
        .pipe(autoprefixer({
            browsers: ["last 3 versions"],
            cascade: false,
            overrideBrowserslist: [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8"
            ],
            grid: true
        }))

        // css压缩
        // .pipe(minifyCss({
        //     keepSpecialComments: "*"
        // }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/css'))
        .pipe(reload({
            stream: true
        }));
});

gulp.task('babel', () =>
    gulp.src('src/js/*.js')
    .pipe(buffer())
    .pipe(named({}))
    //.pipe(webpack(webpackConfig))
    .pipe(sourcemaps.init({
        loadMaps: true
    }))
    .pipe(babel({
        presets: ['env']
    }))
    .on('error', swallowError)
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'))
);

// 监视 Sass 文件的改动，如果发生变更，运行 'sass' 任务，并且重载文件
gulp.task('server', ['sass', 'babel'], function () {
    //   browserSync({
    //     server: {
    //       baseDir: 'src'
    //     }
    //   });

    gulp.watch(['src/scss/*.scss','src/scss/**/*.scss'], ['sass']);
    gulp.watch(['src/js/*.js','src/js/**/*.js'], ['babel']);
    //刷新页面
    gulp.watch(['html/*.html', 'css/**/*.css', 'js/**/*.js'], {
        cwd: 'src'
    }, reload);
});