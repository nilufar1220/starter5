const{src, dest} = require("gulp");
const url = require("../config/url.js");
const guplFileInclude = require("gulp-file-include");
const htmlMin = require("gulp-htmlmin");
const gulpSize = require("gulp-size");

const html = () =>{
    return src(url.html.src)
    .pipe(guplFileInclude())
    .pipe(gulpSize({
        title: "Before size:"
    }))
    .pipe(htmlMin({
        collapseWhitespace:true
    }))
    .pipe(gulpSize({
        title: "After size:"
    }))
    .pipe(dest(url.html.dest))
}

module.exports = html;