var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    htmlmin = require('gulp-htmlmin'),
    htmlbeautify = require('gulp-html-beautify'),
    concatCSS = require('gulp-concat-css'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css');

gulp.task('sass', function() {
  gulp.src('./scss/main.scss')
      .pipe(sass())
      .pipe(gulp.dest('./css/'))
      .pipe('autoprefixer')
      .pipe(browserSync.reload({stream: true}));

});

/*
gulp.task('concat', function() {
  gulp.src('./Trillo/starter/css/*.css')
      .pipe(concatCSS('./main.css'))
      .pipe(gulp.dest('./Trillo/starter/css/'));
});
*/

gulp.task('autoprefixer', function() {
  gulp.src('./css/main.css')
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('./css/prefix'));

});

gulp.task('cleanCSS', function() {
  gulp.src('./css/prefix/main.css')
      .pipe(cleanCSS({}))
      .pipe(gulp.dest('./css/dest'));
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: ["./"]
    }
  });


  gulp.watch('./scss/*.scss', ['sass', 'autoprefixer', 'cleanCSS']);
  gulp.watch('./scss/base/*.scss', ['sass', 'autoprefixer', 'cleanCSS']);
  gulp.watch('./scss/abstracts/*.scss', ['sass', 'autoprefixer', 'cleanCSS']);
  gulp.watch('./scss/components/*.scss', ['sass', 'autoprefixer', 'cleanCSS']);
  gulp.watch('./scss/layout/*.scss', ['sass', 'autoprefixer', 'cleanCSS']);
  gulp.watch('./scss/pages/*.scss', ['sass', 'autoprefixer', 'cleanCSS']);
  gulp.watch('./css/*.css').on('change', browserSync.reload);
  gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve', 'sass', 'autoprefixer', 'cleanCSS']);
