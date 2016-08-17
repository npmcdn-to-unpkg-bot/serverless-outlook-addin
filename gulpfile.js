var gulp        = require("gulp")
,   browserSync = require("browser-sync").create()
,   reload      = browserSync.reload
,   webpack     = require("webpack")
,   webpack_cfg = require("./webpack.config")
,   fileinclude = require("gulp-file-include")
,   babel       = require("gulp-babel")
,   typings     = require("gulp-typings")

/*
SEMANTIC-UI MODULES 
*/
,   semantic_config       = require('./semantic/tasks/config/user')
,   semantic_watch        = require('./semantic/tasks/watch')
,   semantic_build        = require('./semantic/tasks/build')
,   semantic_buildJS      = require('./semantic/tasks/build/javascript')
,   semantic_buildCSS     = require('./semantic/tasks/build/css')
,   semantic_buildAssets  = require('./semantic/tasks/build/assets')
,   semantic_clean        = require('./semantic/tasks/clean')
;

gulp.task('typings', function() {
    var stream = gulp.src("./typings.json")
        .pipe(typings()); //will install all typingsfiles in pipeline. 
    return stream;
    
});

gulp.task('webpack', function() {
    webpack(
        webpack_cfg,
        function (err, stats) {
            if (err)
                console.log(err);
            browserSync.reload();
        });
});


gulp.task('html', function() {
    gulp.src('./src/index.html')
      .pipe(fileinclude({
          prefix: '@@',
          basepath: './src/partials'
      }))
      .pipe(gulp.dest('./dist/'));
});

gulp.task('scripts', ['typings', 'webpack'], function() {
    gulp.src('./src/scripts/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('images', function() {
    gulp.src('./src/images/**/*.*')
      .pipe(gulp.dest('./dist/images/'));
      browserSync.reload();
});

gulp.task('css', function() {
    gulp.src('./src/styles/**/*.css').pipe(gulp.dest('./dist/'));
});

gulp.task('watch', ['build','semantic_watch'], function() {
    browserSync.init({
        server: "./dist/",
        online: true
    });
    gulp.watch(['src/scripts/**/*.tsx', 'src/scripts/**/*.js'], ['webpack']);
    gulp.watch(['src/images/**/*.*'], ['images']);
    gulp.watch(['src/styles/**/*.css'], ['css']);
    gulp.watch(['dist/semantic.*', 'dist/main.css']).on('change', reload);
    gulp.watch(['src/**/*.html'], function(file) {
        gulp.src('./src/index.html')
          .pipe(fileinclude({
          prefix: '@@',
          basepath: './src/partials'
      }))
          .pipe(gulp.dest('./dist/')).on('end', reload);
    });
});

gulp.task('build', ['semantic_build', 'html', 'css', 'scripts', 'images'], function (){
});

gulp.task('clean', ['semantic_clean'], function() {
    // content
});


/**
 * SEMANTIC-UI TASKS
 */
gulp.task('semantic_build', semantic_build);
gulp.task('semantic_clean', semantic_clean);
gulp.task('semantic_watch', semantic_watch);