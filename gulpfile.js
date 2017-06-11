var gulp = required("gulp");
var less = required("gulp-less");

gulp.task("less", function() {
  gulp.src("less/style.less")
    .pipe(less())
    .pipe(gulp.dest("css"));
})
