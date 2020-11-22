const { getObjectId, getObjectIds } = require('../../helpers/index');

const items=[
	{
		"id": getObjectId('item1'),
		"ID": 1,
		"title": "Aripioare marinate",
		"category": "Lunch",
		"rating": 60,
		"__v": 0,
		"slug": "aripioare-marinate",
		"show": true
	},
	{
		"id": getObjectId('item2'),
		"ID": 2,
		"title": "Bere Heineken",
		"category": "Drinks",
		"rating": 20,
		"__v": 0,
		"slug": "bere-heineken",
		"show": true
	},
	{
		"id": getObjectId('item3'),
		"ID": 3,
		"title": "Ceai",
		"category": "Drinks",
		"rating": 45,
		"__v": 0,
		"slug": "ceai",
		"show": true
	},
	{
		"id": getObjectId('item4'),
		"ID": 4,
		"title": "Chipsuri cu aroma de pui",
		"category": "Snack",
		"rating": 49,
		"__v": 0,
		"slug": "chipsuri-cu-aroma-de-pui",
		"show": true
	},
	{
		"id": getObjectId('item5'),
		"ID": 5,
		"title": "Conserva de Ton",
		"category": "Dinner",
		"rating": 70,
		"__v": 0,
		"slug": "conserva-de-ton",
		"show": true
	},
	{
		"id": getObjectId('item6'),
		"ID": 6,
		"title": "Ceafa de porc cu piure",
		"category": "Lunch",
		"rating": 65,
		"__v": 0,
		"slug": "ceafa-de-porc-cu-piure",
		"show": true
	},
	{
		"id": getObjectId('item7'),
		"ID": 7,
		"title": "Frigarui cu rosii",
		"category": "Lunch",
		"rating": 80,
		"__v": 0,
		"slug": "frigarui-cu-rosii",
		"show": true
	},
	{
		"id": getObjectId('item8'),
		"ID": 8,
		"title": "Gogoasa cu ciocolata",
		"category": "Snack",
		"rating": 65,
		"__v": 0,
		"slug": "gogoasa-cu-ciocolata",
		"show": true
	},
	{
		"id": getObjectId('item9'),
		"ID": 9,
		"title": "Prajiturele cu lapte",
		"category": "Snack",
		"rating": 42,
		"__v": 0,
		"slug": "prajiturele-cu-lapte",
		"show": true
	}
];

module.exports = items;