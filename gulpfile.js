const _gulp = require('gulp');
const { src, dest, parallel }  = require('gulp');


// HTML
const _pug = require('gulp-pug'); 

//CSS
const _stylus = require('gulp-stylus');
const _autoprefixer = require('autoprefixer');
const _cssNano = require('cssnano');
const _postCss = require('gulp-postcss');
const _flexFix = require('postcss-flexbugs-fixes');


//Webpack
const _webpackStream = require('webpack-stream');
const _webpackConfig = require('./webpack.config.js');
const _webpackPack = require('webpack');

//Other
const _paths = require('./configs/config-path');
const _concat = require('gulp-concat');
const _sourcemaps = require('gulp-sourcemaps');


function html() {
  return src('markup/pages/*.pug')
    .pipe(_pug())
    .pipe(dest(_paths.html.output))
}

function css() {
  let plugins = [
    _autoprefixer(),
    _cssNano(),
    _flexFix()
  ]
  return src('markup/**/*.styl')
    .pipe(_sourcemaps.init())
    .pipe(_stylus({
      'include css': true
    }))
    .pipe(_postCss(plugins))
    .pipe(_concat('main.css'))
    .pipe(_sourcemaps.write('.'))
    .pipe(dest(_paths.css.output))
}

function webpack() {
  return _webpackStream(_webpackConfig, _webpackPack)
  .pipe(dest(_paths.js.output));
}


exports.webpack = webpack;
exports.css = css;
exports.html = html;
exports.default = parallel(html, css, webpack);