let gulp                = require('gulp'),
 nunjucksRender 		= require('gulp-nunjucks-render'),
 sass                   = require('gulp-sass'),
 watch               	= require('gulp-watch'),
 cleanCSS               = require('gulp-clean-css'),
 autoprefixer           = require('gulp-autoprefixer');

gulp.task('watch', function () {
  gulp.watch(['src/style.scss','src/**/*.scss'], ['sass']);
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('dest/*.css', ['css']);
});

gulp.task("html", function(){
	return gulp.src("src/**/*.html")
		    .pipe(nunjucksRender())
		   .pipe(gulp.dest('dest'));
});

gulp.task("sass", function(){
	return gulp.src(['src/style.scss','src/**/*.scss'])
		   .pipe(sass())
		   .pipe(gulp.dest('dest'));
});

gulp.task("css", function(){
	return gulp.src("dest/*.css")
		   .pipe(cleanCSS())
		   .pipe(autoprefixer({
	            browsers: ['last 2 versions'],
	            cascade: false
	        }))
		   .pipe(gulp.dest('dest'));
});