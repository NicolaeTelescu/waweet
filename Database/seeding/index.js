const path = require('path');
const { Seeder } = require('mongo-seeding');
require('dotenv/config');

const config = {
	database: process.env.DB_CONNECTION,
	dropDatabase: true,
};

const seeder = new Seeder(config);
const collections = seeder.readCollectionsFromPath(
	path.resolve('./Database/seeding/data'),
	{
		transformers: [Seeder.Transformers.replaceDocumentIdWithUnderscoreId],
	},
);

seeder
	.import(collections)
	.then(() => {
		console.log('Success');
	})
	.catch(err => {
		console.log('Error', err);
	});
