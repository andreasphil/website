const { src, dest, watch, series, parallel } = require('gulp'),
  clean = require('gulp-clean'),
  postcss = require('gulp-postcss'),
  sourcemaps = require('gulp-sourcemaps')

// Clean up the destination folder
function cleanBuild () {
  return src('site/static', { read: false })
    .pipe(clean())
}

// Generate stylesheet from sources
function buildCss () {
  return src('src/styles.css')
    .pipe(sourcemaps.init())
    .pipe(postcss())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('site/static/'))
}

function buildJs () {
  return src('src/index.js')
    .pipe(dest('site/static'))
}

// Wrapper for individual build tasks
const build = series(cleanBuild, buildJs, buildCss)

// Expose tasks
exports.build = build
exports.default = () => {
  build()
  watch('src/**/*.js', buildJs)
  watch('src/**/*.css', buildCss)
  watch('tailwind.config.js', buildCss)
}
