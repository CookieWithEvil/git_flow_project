let gulp                = require('gulp'),
 nunjucksRender 		= require('gulp-nunjucks-render'),
 sass                   = require('gulp-sass'),
 watch               	= require('gulp-watch'),
 cleanCSS               = require('gulp-clean-css'),
 autoprefixer           = require('gulp-autoprefixer');

gulp.task("html", function(){
	return gulp.src("src/**/*.html")
		    .pipe(nunjucksRender())
		   .pipe(gulp.dest('dest'));
});

gulp.task("sass", function(){
	return gulp.src(['src/style.scss','src/**/*.scss'])
		   .pipe(sass())
		   .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: true
        }))
    	   .pipe(cleanCSS({compatibility: 'ie8'}))
		   .pipe(gulp.dest('dest'));
});

gulp.task('default',['html','sass'], function () {
    gulp.watch('./src/**/*.scss', ['sass']);
    gulp.watch("./src/**/*.html", ['html']);
});