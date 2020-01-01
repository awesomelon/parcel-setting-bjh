const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminOptipng = require('imagemin-optipng');

(async () => {
	let files = await imagemin(['dist/static/*.{jpg,png}'], {
		destination: 'dist/static',
		use: [imageminJpegtran(), imageminOptipng()]
	});

	console.log(files);
})();
