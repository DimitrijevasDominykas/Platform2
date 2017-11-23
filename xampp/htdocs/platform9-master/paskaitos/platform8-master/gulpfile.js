const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

gulp.task('browser-sync', function () {
    browserSync.init({
        proxy: "http://localhost",
    });
});



gulp.task('compile', function () {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({debug: true}, function (details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', function () {
    gulp.watch('./src/sass/**/*.scss', ['compile']);
    gulp.watch('./dist/**/*.php').on("change", browserSync.reload);
    gulp.watch('./dist/css/*.css').on("change", browserSync.reload);
    gulp.watch('./src/js/files/script/*.js').on("change",browserSync.reload);
});

gulp.task('default', ['watch', 'browser-sync']);

