var gulp = require('gulp'),
    debug = require('gulp-debug'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    browserSync = require('browser-sync'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    ts = require('gulp-typescript');
        
var reload = browserSync.reload;


gulp.task('run', ['browsersync'], function () {
    gulp.watch('src/**/*.scss', [':app:scss', ':server:scss']);
    gulp.watch('src/**/*.pug', [':app:pug', ':server:pug']);
    
    gulp.watch(['./src/app/**/*.ts'], [':app:typescript']);

    gulp.watch(['./src/server/**/*.ts'], [':server:typescript']);

    gulp.watch(['./server.js', './systemjs.config.js'], [':app:copyfiles', ':server:copyfiles'], reload);
});

gulp.task('browsersync', ['nodemon'], function(){
    browserSync.init(null, {
        proxy: 'http://localhost:3000',
        port: '5000'
    })
})

gulp.task('nodemon', ['build'], function (cb) {
    var called = false;

    return nodemon({
        script: './dist/server.js',
        ignore: [
            './src/server/*.*',
            './src/app/*.*',
            './dist'
        ]
    })
        .on('start', function () {
            if (!called) {
                called = true;
                cb();
            }
        });
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.scss', [':app:styles', ':server:styles']);
    gulp.watch('src/**/*.pug', [':app:pug', ':server:pug']);
    
p.watch(['./src/app/**/*.ts'], [':app:typescript']);

    //gulp.watch(['./src/server/**/*.ts'], [':server:typescript']);

    gulp.watch(['./server.js', './systemjs.config.js'], [':app:copyfiles', ':server:copyfiles'], reload);
})



/***********
BUILD TASKS
************/
gulp.task('build', ['clean', ':server:build', ':app:build']);

gulp.task('clean', function () {
    del.sync('./dist');
});



/***********
APP TASKS
************/
gulp.task(':app:build', [':app:typescript', ':app:copyfiles', ':app:pug', ':app:scss']);
gulp.task(':app:typescript', [':app:copyfiles'], function(){
    var tsProject = ts.createProject('./tsconfig.app.json')
    return tsProject.src()
        .pipe(ts(tsProject))
        .js.pipe(gulp.dest("dist/public"))
        .pipe(reload({ stream: true }));
});


gulp.task(':app:copyfiles', function(){
     return gulp.src(['./systemjs.config.js'])
        .pipe(plumber())
        .pipe(gulp.dest('./dist/public/js'));
});

gulp.task(':app:pug', function () {
     return gulp.src('./src/app/**/*.pug')
        .pipe(plumber())
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest('./dist/public'))
        .pipe(reload({stream: true}));
});

gulp.task(':app:scss', function () {
     return gulp.src('./src/app/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/public'))
        .pipe(reload({stream: true}));
});



/***********
SERVER TASKS
************/
gulp.task(':server:build',[':server:typescript', ':server:copyfiles', ':server:pug', ':server:scss']);

gulp.task(':server:typescript', function(){
    var tsProject = ts.createProject('./tsconfig.server.json')
    return tsProject.src()
        .pipe(ts(tsProject))
        .js.pipe(gulp.dest("dist/public/js"))
        .pipe(reload({ stream: true }));
});

gulp.task(':server:copyfiles', function () {
    return gulp.src(['server.js'])
        .pipe(plumber())
        .pipe(gulp.dest('./dist'));  
});

gulp.task(':server:scss', function () {
     return gulp.src('./src/server/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./dist/public/css'))
        .pipe(reload({stream: true}));
});

gulp.task(':server:pug', function () {
    return gulp.src('src/server/**/*.pug')
        .pipe(plumber())
        .pipe(gulp.dest('./dist/'))
        .pipe(reload({stream: true}));
});