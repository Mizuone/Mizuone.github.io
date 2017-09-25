var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    htmlmin = require('gulp-htmlmin'),
    htmlbeautify = require('gulp-html-beautify');

gulp.task('htmlbeautify', function() {
  var options = {
    indentSize: 2
  };
  gulp.src('index.html')
    .pipe(htmlbeautify(options))
    .pipe(gulp.dest('./'));
});


gulp.task('minify', function() {
   gulp.src('index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'));
});

gulp.task('sass',function() {
   gulp.src('scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({stream: true}));
});
gulp.task('serve', function() {
   browserSync.init({
       server: {
           baseDir: "./"
       }
   });


    gulp.watch('./scss/*.scss', ['sass']);
    gulp.watch('./**/*.html').on('change', browserSync.reload);
});



gulp.task('default', ['sass', 'serve']);
