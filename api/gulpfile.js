var gulp = require('gulp')
var concat = require('gulp-concat')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var ngAnnotate = require('gulp-ng-annotate')


gulp.task('js', function(require){
    gulp.src(['ng/module.js', 'ng/**/*.js'])
    .pipe(sourcemaps.init())
     .pipe(concat('app.js'))
     .pipe(ngAnnotate(require))
     .pipe(uglify(require))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets'))
})

// gulp watcher (NG folder directory)!!!! 

gulp.task('watch:js', ['js'], function(){
    gulp.watch('ng/**/*.js', ['js'])
})

//read files under the gulp folder directory!!

var fs = require('fs')
fs.readdirSync(__dirname + '/gulp').forEach(function (require) {
    require('./gulp/' + task)
})
