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
		console.log('DB has been filled successfully!');
	})
	.catch(err => {
		console.log('Error when trying to seed the DB', err);
	});
