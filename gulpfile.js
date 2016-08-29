var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

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
