const { parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
    return gulp.src('src/sass/index.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(uglifycss({"uglyComments": true }))
            .pipe(concat('estilo.min.css'))
            .pipe(gulp.dest('build/css'))
}

function copiarHTML() {
    return gulp.src('src/index.html')
            .on('error', err => console.log(err))
            .pipe(gulp.dest('build'))
}

exports.default = parallel(transformacaoCSS, copiarHTML)

