const gulp = require('gulp');
const sass = require('gulp-sass');
const cssImport = require('gulp-cssimport');


function defaultTask(cb) {
    // place code for your default task here
    console.log('test')

    return gulp.src('scss/*.scss')
        .pipe(sass({
            includePaths: ['./node_modules']
        }).on('error', sass.logError))
        .pipe(cssImport({
            includePaths: ['./node_modules']
        }))
        .pipe(gulp.dest('css/'));
    cb();
}

exports.default = defaultTask