const{src, dest} = require("gulp")
const url = require("../config/url.js");
const gulpSize = require("gulp-size");
const newer = require("gulp-newer");
const fonter  = require("gulp-fonter");
const woff2  = require("gulp-ttf2woff2");

const font = () => {
    return src(url.font.src)
    
    .pipe(gulpSize({
        title: "Before size:"
    }))
    .pipe(gulpSize({
        title: "After size:"
    }))

    .pipe(newer(url.font.dest))
    .pipe(fonter({
        formats:["ttf","eot","woff","svg"]
    }))
    .pipe(woff2())

    .pipe(dest(url.font.dest))
}

module.exports = font;