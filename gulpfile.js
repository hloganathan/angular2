let gulp = require('gulp'),
    debug = require('gulp-debug'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    browserSync = require('browser-sync'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    ts = require('gulp-typescript'),
    tslint = require('gulp-tslint');

let gulpsync = require('gulp-sync')(gulp);    

let reload = browserSync.reload;

let appFolder = './dist/app';
let serverFolder = './dist/server';

gulp.task('run', ['browsersync'],  () => {
    gulp.watch('src/**/*.scss', [':app:scss', ':server:scss']);
    gulp.watch('src/**/*.pug', [':app:pug', ':server:pug']);
    
    gulp.watch(['./src/app/**/*.ts'], [':app:typescript']);

    gulp.watch(['./src/server/**/*.ts'], [':server:typescript']);
});

gulp.task('browsersync', ['nodemon'], () => {
    browserSync.init(null, {
        proxy: 'http://localhost:3000',
        port: '5000'
    });
});

gulp.task('nodemon', ['build'], (cb) => {
    let called = false;

    return nodemon({
        script: './dist/server/app.js',
        ignore: [
            './src/server/*.*',
            './src/app/*.*',
            './dist'
        ]
    })
        .on('start', () => {
            if (!called) {
                called = true;
                cb();
            }
        });
});

gulp.task('watch', () => {
    gulp.watch('src/**/*.scss', [':app:styles', ':server:styles']);
    gulp.watch('src/**/*.pug', [':app:pug', ':server:pug']);
    gulp.watch(['./src/app/**/*.ts'], [':app:typescript']);
});



/***********
BUILD TASKS
************/
gulp.task('build', gulpsync.sync(['clean', ':server:build', ':app:build', ':app:bootstrap','jquery']));

gulp.task('clean', () => {
    del.sync('./dist');
});

gulp.task('jquery', () => {
    gulp.src('./node_modules/jquery/dist/*.js')
        .pipe(gulp.dest(appFolder + '/js'));
});

gulp.task(':ts-lint', () => {
    return gulp.src('./src/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});

gulp.task(':server:ts-lint', () => {
    return gulp.src('./src/server/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});

gulp.task(':app:ts-lint', () => {
    return gulp.src('./src/app/**/*.ts')
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});

/***********
APP TASKS
************/
gulp.task(':app:build', [':app:typescript', ':app:copyfiles', ':app:pug', ':app:scss']);
gulp.task(':app:typescript', [':app:copyfiles'], () => {
    let tsProject = ts.createProject('./tsconfig.app.json');
    return tsProject.src()
        .pipe(ts(tsProject))
        .js.pipe(gulp.dest(appFolder))
        .pipe(reload({ stream: true }));
});


gulp.task(':app:copyfiles', [':app:ts-lint'], () => {
    return gulp.src('./node_modules/@angular/**/*.*')
        .pipe(gulp.dest('./dist/app/vendor/@angular'));
});

gulp.task(':app:pug', () => {
     return gulp.src('./src/app/**/*.pug')
        .pipe(plumber())
        .pipe(pug({ pretty: true }))
        .pipe(gulp.dest(appFolder))
        .pipe(reload({stream: true}));
});

gulp.task(':app:scss', () => {
     return gulp.src('./src/app/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(appFolder))
        .pipe(reload({stream: true}));
});

gulp.task(':app:bootstrap', [':app:boostrap-css', ':app:boostrap-js', ':app:boostrap-fonts']);

gulp.task(':app:boostrap-css', () => {
    return gulp.src('./node_modules/bootstrap/dist/**/bootstrap*.css')
        .pipe(gulp.dest(appFolder)); 
});

gulp.task(':app:boostrap-js', () => {
    return gulp.src('./node_modules/bootstrap/dist/**/*.js')
        .pipe(gulp.dest(appFolder)); 
});

gulp.task(':app:boostrap-fonts', () => {
    return gulp.src('./node_modules/bootstrap/dist/**/*.*')
        .pipe(gulp.dest(appFolder)); 
});

/***********
SERVER TASKS
************/
gulp.task(':server:build',[':server:typescript', ':server:copyfiles', ':server:pug', ':server:scss']);

gulp.task(':server:typescript', [':server:ts-lint'], () => {
    let tsProject = ts.createProject('./tsconfig.server.json');
    return tsProject.src()
        .pipe(ts(tsProject))
        .js.pipe(gulp.dest(serverFolder))
        .pipe(reload({ stream: true }));
});

gulp.task(':server:copyfiles', () => {
    return gulp.src(['./src/server/server.js'])
        .pipe(plumber())
        .pipe(gulp.dest(serverFolder));  
});

gulp.task(':server:scss', () => {
     return gulp.src('./src/server/scss/**/*.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(serverFolder + '/css'))
        .pipe(reload({stream: true}));
});

gulp.task(':server:pug', () => {
    return gulp.src('src/server/**/*.pug')
        .pipe(plumber())
        .pipe(gulp.dest(serverFolder))
        .pipe(reload({stream: true}));
});
