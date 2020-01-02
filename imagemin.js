const imagemin = require('imagemin-keep-folder');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');

(async () => {
    await imagemin(['dist/static/*.{jpg,png,gif}'], {
        use: [imageminMozjpeg(), imageminPngquant(), imageminGifsicle()]
    });

    console.log(`image optimize complete`);
})();
