import gulp from "gulp";
import browserSync from"browser-sync";
import contact from "gulp-concat";

//include url
import url from "./config/url.js";

//include tasks
import clear from "./tasks/clear.js";
import pug from "./tasks/pug.js";
import scss from "./tasks/scss.js";
import image from"./tasks/image.js";
import font from"./tasks/font.js";
import js from"./tasks/script.js";


const watching = () => {
    gulp.watch(url.pug.watch, pug).on('change', browserSync.reload) ;
    gulp.watch(url.scss.watch, scss).on('change', browserSync.reload) ;
    gulp.watch(url.image.watch, image).on('change', browserSync.reload) ;
    gulp.watch(url.font.watch, font).on('change', browserSync.reload) ;
    gulp.watch(url.js.watch, js).on('change', browserSync.reload) ;
}


const server =() =>{
browserSync.init({
server:{
baseDir:url.pro
}
    })
}

const start = gulp.series(
    clear,
    gulp.parallel(pug, scss, image, font, js),
    gulp.parallel( watching, server)
)

const finish = gulp.series(
    clear,
    parallel(pug, scss, image, font, js),
)

export{
pug,
export,
watch,
clear,
scss,
image,
font,
js
};

export  default  url.proIs
?finish
:start;

