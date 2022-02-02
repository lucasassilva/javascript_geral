const gulp = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const uglifycss = require("gulp-uglifycss");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const imagemin = require("gulp-image");
const { series, parallel, watch } = require("gulp");

function bundleJs() {
	return gulp
		.src("./src/assets/js/*.js")
		.pipe(babel({ presets: ["@babel/preset-env"] }))
		.pipe(uglify())
		.pipe(concat("bundle.js"))
		.pipe(gulp.dest("./public/assets/js"));
}

function bundleCss() {
	return gulp
		.src("./src/assets/css/*.css")
		.pipe(uglifycss({ uglyComments: false }))
		.pipe(concat("bundle.css"))
		.pipe(gulp.dest("./public/assets/css"));
}

function bundleSass() {
	return gulp
		.src("./src/assets/scss/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(uglifycss({ uglyComments: false }))
		.pipe(concat("_bundle.css"))
		.pipe(gulp.dest("./public/assets/css"));
}

function bundleImages() {
	return gulp
		.src("src/assets/img/*.{png,jpg,jpeg,gif,svg}")
		.pipe(imagemin())
		.pipe(gulp.dest("./public/assets/img"));
}

function bundleFonts() {
	return gulp
	.src("./src/assets/fonts/*.{ttf,otf,eot,svg,woff}")
	.pipe(gulp.dest("./public/assets/fonts"));
}

function bundleWatch(callback) {
	watch("./src/assets/js/*.js", bundleJs);
	watch("./src/assets/css/*.css", bundleCss);
	watch("./src/assets/scss/*.scss", bundleSass);
	watch("./src/assets/img/*.{png,jpg,jpeg,gif,svg}", bundleImages);
	watch("./src/assets/img/*.{ttf,otf,eot,svg,woff}", bundleFonts);
	return callback();
}


exports.default = series(
	parallel(bundleJs, bundleCss, bundleSass, bundleImages, bundleFonts),
	bundleWatch
);
