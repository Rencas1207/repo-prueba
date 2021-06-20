const {
   src,
   dest,
   watch,
   series
} = require('gulp');

const sass = require('gulp-sass');
const concat = require('gulp-concat');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');

const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');

const terser = require('gulp-terser-js');
const rename = require('gulp-rename');


const paths = {
   scss: 'src/scss/**/*.scss',
   js: 'src/js/**/*.js',
   imgs: 'src/img/**/*'
}

function css() {
   return src(paths.scss)
      // .pipe(sourcemaps.init())
      .pipe(sass())
      // .pipe(postcss([autoprefixer(), cssnano()]))
      // .pipe(sourcemaps.write('.'))
      .pipe(dest('./build/css'));
}

function javascript() {
   return src(paths.js)
      // .pipe(sourcemaps.init())
      // .pipe(concat('bundle.js'))
      // .pipe(terser())
      // .pipe(sourcemaps.write('.'))
      // .pipe(rename({
      //    suffix: '.min'
      // }))
      .pipe(dest('./build/js'))
}

// function imagenes() {
//    return src(paths.imgs)
//       .pipe(imagemin())
//       .pipe(dest('./build/img'))
//       .pipe(notify({
//          message: 'Imagen Minificada'
//       }))
// }

// function versionWebp() {
//    return src(paths.imgs)
//       .pipe(webp())
//       .pipe(dest('./build/img'))
//       .pipe(notify({
//          message: 'Version Webp'
//       }))
// }

function watchFiles() {
   watch(paths.scss, css)
   watch(paths.js, javascript)
   // watch(paths.imgs, imagenes);
   // watch(paths.imgs, versionWebp);
}

// exports.default = series(css, javascript, imagenes, versionWebp, watchFiles);
exports.default = series(css, javascript, watchFiles);