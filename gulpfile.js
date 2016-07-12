var gulp = require('gulp'),
    debug = require('gulp-debug'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    browserSync = require('browser-sync'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    path = require('path'),
    ts = require('gulp-typescript'),
    tslint = require('gulp-tslint');

var gulpsync = require('gulp-sync')(gulp);    
var reload = browserSync.reload;
var appFolder = './dist/app';
var serverFolder = './dist/server';

gulp.task('run', ['browsersync'],  function() {

    gulp.watch('src/**/*.scss', [':app:scss', ':server:scss']);
    gulp.watch('src/**/*.pug', [':app:pug', ':server:pug']);
    
    gulp.watch(['./src/app/**/*.ts'], [':app:typescript']);

    gulp.watch(['./src/server/**/*.ts'], [':server:typescript']);
});

gulp.task('browsersync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: 'http://localhost:3000',
        port: '5000'
    });
});

gulp.task('nodemon', ['build'], function(cb) {
    var called = false;

    return nodemon({
        script: './dist/server/app.js',
        ignore: [
            './src/server/*.*',
            './src/app/*.*',
            './dist'
        ]
    })
        .on('start', function() {
            if (!called) {
                called = true;
                cb();
            }
        });
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.scss', [':app:styles', ':server:styles']);
    gulp.watch('src/**/*.pug', [':app:pug', ':server:pug']);
    gulp.watch(['./src/app/**/*.ts'], [':app:typescript']);
});



/***********
BUILD TASKS
************/
gulp.task('build', gulpsync.sync(['clean',':shared:copy-to-server', ':server:build', ':app:build', ':app:bootstrap','jquery']));

gulp.task('clean', function() {
    del.sync('./dist');
});

gulp.task('jquery', function() {
    gulp.src('./node_modules/jquery/dist/*.js')
        .pipe(gulp.dest(appFolder + '/js'));
});

gulp.task(':ts-lint', function() {
    return gulp.src('./src/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});

gulp.task(':server:ts-lint', function() {
    return gulp.src('./src/server/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});

gulp.task(':app:ts-lint', function() {
    return gulp.src('./src/app/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});

/**
 * Shared Tasks
 */
gulp.task(':shared:typescript', [':shared:ts-lint'], function() {
    var tsProject = ts.createProject('./tsconfig.shared.json');
    return tsProject.src('./src/shared')
        .pipe(ts(tsProject))
        .js.pipe(gulp.dest('./dist/app/shared'))
        .pipe(reload({ stream: true }));
});

gulp.task(':shared:copy-to-server', [':shared:typescript'], function(){
    return gulp.src('./dist/app/shared/**/*.*')
        .pipe(gulp.dest('./dist/shared'));
});

gulp.task(':shared:ts-lint', function() {
    return gulp.src('./src/shared/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});


/***********
APP TASKS
************/
gulp.task(':app:build', [':app:typescript', ':app:copyfiles', ':app:pug', ':app:scss']);
gulp.task(':app:typescript', [':app:copyfiles'], function() {
    var tsProject = ts.createProject('./tsconfig.app.json');
    return tsProject.src()
        .pipe(ts(tsProject))
        .js.pipe(gulp.dest('./dist'))
        .pipe(reload({ stream: true }));
});


gulp.task(':app:copyfiles', [':app:ts-lint'], function() {
    return gulp.src('./node_modules/@angular/**/*.*')
        .pipe(gulp.dest('./dist/app/vendor/@angular'));
});

gulp.task(':app:pug', function() {
     return gulp.src('./src/app/**/*.pug')
        .pipe(plumber())
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest(appFolder))
        .pipe(reload({stream: true}));
});

gulp.task(':app:scss', function() {
     return gulp.src('./src/app/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(appFolder))
        .pipe(reload({stream: true}));
});

gulp.task(':app:bootstrap', [':app:boostrap-css', ':app:boostrap-js', ':app:boostrap-fonts']);

gulp.task(':app:boostrap-css', function() {
    return gulp.src('./node_modules/bootstrap/dist/**/bootstrap*.css')
        .pipe(gulp.dest(appFolder)); 
});

gulp.task(':app:boostrap-js', function() {
    return gulp.src('./node_modules/bootstrap/dist/**/*.js')
        .pipe(gulp.dest(appFolder)); 
});

gulp.task(':app:boostrap-fonts', function() {
    return gulp.src('./node_modules/bootstrap/dist/**/*.*')
        .pipe(gulp.dest(appFolder)); 
});

/***********
SERVER TASKS
************/
gulp.task(':server:build',[':server:typescript', ':server:pug', ':server:scss']);

gulp.task(':server:typescript', [':server:ts-lint'], function() {
    //var tsResult = gulp.src('./src/server/**/*.ts')
    //    .pipe(sourcemaps.init())
    //    .pipe(ts({
    //        out: 'app.js'
    //    }))
    //    .pipe(sourcemaps.write())
    //    .pipe(gulp.dest('./dist/server'));


    var tsProject = ts.createProject('./tsconfig.server.json');
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .js
        .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '../src/server'}))
        .pipe(gulp.dest('./dist'));
});

gulp.task(':server:scss', function() {
     return gulp.src('./src/server/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(serverFolder + '/css'))
        .pipe(reload({stream: true}));
});

gulp.task(':server:pug', function() {
    return gulp.src('src/server/**/*.pug')
        .pipe(plumber())
        .pipe(gulp.dest(serverFolder))
        .pipe(reload({stream: true}));
});
