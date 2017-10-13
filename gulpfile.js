var gulp = require('gulp');
    browserSync = require('browser-sync').create();
    sass = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer');   
    reload = browserSync.reload;

var src = {
    scss: 'app/scss/**/*.scss',
    css: 'app/css',
    js: 'app/js/*.js',
    html: 'app/*.html'
};

// Static Server + watching scss/html/js files
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: './app'
    });

    gulp.watch(src.scss, ['sass']);
    gulp.watch(src.css).on('change', reload);
    gulp.watch(src.js).on('change', reload);
    gulp.watch(src.html).on('change', reload);
});

// Compile sass into CSS
gulp.task('sass', function() {
    return gulp
        .src(src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(src.css))
        .pipe(reload({ stream: true }));
});

gulp.task('default', ['serve']);
