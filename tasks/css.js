const{src, dest} = require("gulp");
const url = require("../config/url.js");
const contact = require("gulp-concat");
const cssImport = require("gulp-cssimport");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const shorthand = require("gulp-shorthand");
const size = require("gulp-size");
const mediaCss = require("gulp-group-css-media-queries");

const css = () => {
    return src(url.css.src)

    .pipe (contact("style.css"))
    .pipe(cssImport())
    .pipe(autoprefixer())  
    .pipe(mediaCss())
    .pipe(shorthand())
    .pipe(size({
        title:"main.css"
    }))
    .pipe(dest(url.css.dest)) 
    .pipe(csso())
    .pipe(size({
        title:"main.min.css"
    }))
    .pipe(rename({
        suffix:".min"
    }))
  
    .pipe(dest(url.css.dest))
}

module.exports = css;