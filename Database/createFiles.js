const fs = require('fs');

// Creating the folders
const dir = './Database/Database';
if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir);
	fs.mkdirSync(dir + '/logs');

	fs.appendFile(dir + '/logs/logs.txt', '', (err) => {
		console.log('Created files with success');
	});
}