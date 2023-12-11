const{src, dest} = require("gulp")
const url = require("../config/url.js");
const gulpSize = require("gulp-size");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

const js = () => {
    return src(url.js.src)
    
    .pipe(gulpSize({
        title: "Before size:"
    }))

    .pipe(gulpSize({
        title: "After size:"
    }))
    .pipe(babel())
    .pipe(uglify())
    .pipe(rename({
      suffix:".min"  
    }))
    .pipe(dest(url.js.dest))
}

module.exports = js;