var gulp = require('gulp');
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require('browser-sync').create();

//ブラウザ同期
gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: "./",
			index: "index.html"
		}
	});
});

gulp.task('bs-reload', function () {
	browserSync.reload();
});

//scssコンパイル
gulp.task("sass", function() {
	gulp.src("./sass/**/*.scss")
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest("./css"))
});


//下記ファイルが変更されたリロード。
gulp.task('default', ['browser-sync'], function () {
	gulp.watch("./**/*.js", []);
	gulp.watch("./**/*.scss", ['sass']);
	gulp.watch("./*.html", ['bs-reload']);
	gulp.watch("./css/*.css", ['bs-reload']);
});
