const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
var minCss = require('gulp-minify-css')
var rename = require('gulp-rename');
const autoPrefixer = require('gulp-autoprefixer');

/*
* Gulp commands
*/

// $gulp style
function style() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(autoPrefixer())
        .pipe(minCss())
        .pipe(rename({ extname: '.min.css'}))
        .pipe(gulp.dest('./public/assets/css'))
        .pipe(browserSync.stream());
}

// $gulp watch
function watch() {
    browserSync.init(null, {
      proxy: 'rayco.test'
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./templates/**/*.twig').on('change', browserSync.reload);
}

/*
* Init commands
*/

exports.style = style;
exports.watch = watch;