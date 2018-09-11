var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var batch = require('gulp-batch');

gulp.task('base', function() {
    gulp.src('./src/css/main.scss')
        .pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css/'))
		.pipe(connect.reload());
});

gulp.task('reload', function () {
	gulp.src('./dist/index.html')
	.pipe(connect.reload())
});

gulp.task('default',function() {
    connect.server({
		root: 'dist',
		port: 8888,
		livereload: true
	});

	watch(['./src/css/**/*.scss'], batch(function (events, done) {
        gulp.start('base', done);
    }));

	watch(['./dist/*.html'], batch(function (events, done) {
        gulp.start('reload', done);
    }));
});

// Install:
// $ npm i -D gulp gulp-sass gulp-clean-css gulp-autoprefixer gulp-connect
// $ gulp