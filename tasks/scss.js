const{src, dest} = require("gulp");
const url = require("../config/url.js");
const autoprefixer = require("gulp-autoprefixer");
const csso = require("gulp-csso");
const rename = require("gulp-rename");
const shorthand = require("gulp-shorthand");
const size = require("gulp-size");
const mediaCss = require("gulp-group-css-media-queries");
const sass = require("gulp-sass")(require("sass"));
const gulpSassGlob = require("gulp-sass-glob");

const scss = () => {
    return src(url.scss.src)
    .pipe(gulpSassGlob())
    .pipe(sass())
    .pipe(autoprefixer())  
    .pipe(mediaCss())
    .pipe(shorthand())
    .pipe(size({
        title:"main.css"
    }))
    .pipe(dest(url.scss.dest)) 
    .pipe(csso())
    .pipe(size({
        title:"main.min.css"
    }))
    .pipe(rename({
        suffix:".min"
    }))
  
    .pipe(dest(url.scss.dest))
}

module.exports = scss;