const Jimp = require('jimp');
const Promise = require('promise');

const jimpFunction = async (images, width, quality) => {
	await Promise.all(
		images.map(async img => {
		
			const image = await Jimp.read(img.src);
			await image.resize(width, Jimp.AUTO);
			await image.quality(quality);
			await image.writeAsync(img.dest);
		
		})
	);
};

const convertToSlug = (text) => {
	return text.toLowerCase().replace(/ /g,'-').replace(/[-]+/g, '-').replace(/[^\w-]+/g,'');
}


module.exports = {
	jimp: jimpFunction,
	convertToSlug: convertToSlug
}