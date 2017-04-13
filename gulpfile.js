'use strict';

const	gulp 		= require('gulp'),
		stylus 		= require('gulp-stylus'),
		myth 		= require('gulp-myth'),
		browserSync = require('browser-sync'),
		reload 		= browserSync.reload,
		babel 		= require('gulp-babel'),
		concat 		= require('gulp-concat');

gulp.task('js', function(event){
	console.log('Running tasks "JS"');
	return gulp.src('assets/javascript/*.js')
		.pipe(concat('index.js'))
		.pipe(babel())
		.pipe(gulp.dest('public/js'))
		.pipe(reload({stream: true}));
});

gulp.task('stylus', function(event){
	console.log('Running tasks "STYLUS"');
	return gulp.src('assets/stylus/style.styl')
		.pipe(stylus())
		.on('error', console.log)
		.pipe(myth())
		.pipe(gulp.dest('public/css'))
		.pipe(reload({stream: true}));
});

gulp.task('reload', reload);

gulp.task('default', function() {

    browserSync.init({
        server: "."
    });

    gulp.watch('assets/stylus/**/*.styl', ['stylus', 'reload']);
	gulp.watch('assets/javascript/*.js', ['js', 'reload']);
	gulp.watch('*.html').on('change', reload);

});