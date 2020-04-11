const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const cleanCSS = require('gulp-clean-css');
let babel = require('gulp-babel');
let uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();

const clean = async () => {
  await del(['build']);
};

const html = () => src('./src/*.html')
  .pipe(dest('./build'));

const scss = () => src('./src/scss/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(dest('./build/css/'))
  .pipe(browserSync.stream());

const img = () => src('./src/img/*')
  .pipe(dest('./build/img/'));

const js = () => src(['node_modules/babel-polyfill/dist/polyfill.js', './src/js/**.js'])
  .pipe(babel({presets: ["@babel/preset-env"]}))
  .pipe(uglify())
  .pipe(dest('./build/js/'));

const watchChange = () => {
  browserSync.init({
    server: {
      baseDir: './build'
    }
  });
  watch('./src/scss/**/*.scss', scss).on('change', browserSync.reload);
  watch('./src/*', html).on('change', browserSync.reload);
  watch('./src/img/*', img).on('change', browserSync.reload);
  watch('./src/js/*', js).on('change', browserSync.reload);
};

exports.clean = clean;
exports.html = html;
exports.scss = scss;
exports.img = img;
exports.js = js;
exports.watch = watchChange;

const build = series(html, scss, parallel(img, js));
exports.default = build;
