const { getObjectId, getObjectIds } = require('../../helpers/index');

const items = [{
	"_id": getObjectID('item1'),
	"ID": 1,
	"title": "Salată cu icre",
	"category": "Dinner",
	"rating": 42,
	"slug": "salat-cu-icre",
	"show": true
  },{
	"_id": getObjectID('item2'),
	"ID": 2,
	"title": "Mic dejun à la Nicolae",
	"category": "Breakfast",
	"rating": 73,
	"slug": "mic-dejun--la-nicolae",
	"show": true
  },{
	"_id": getObjectID('item3'),
	"ID": 3,
	"title": "Clătită cu Fineti",
	"category": "Breakfast",
	"rating": 51,
	"slug": "cltit-cu-fineti",
	"show": true
  },{
	"_id": getObjectID('item4'),
	"ID": 4,
	"title": "Conservă de ton",
	"category": "Dinner",
	"rating": 70,
	"slug": "conserv-de-ton",
	"show": true
  },{
	"_id": getObjectID('item5'),
	"ID": 5,
	"title": "Burger Mado",
	"category": "Lunch",
	"rating": 73,
	"slug": "burger-mado",
	"show": true
  },{
	"_id": getObjectID('item6'),
	"ID": 6,
	"title": "Golden Shower",
	"category": "Drinks",
	"rating": 37,
	"slug": "golden-shower",
	"show": true
  },{
	"_id": getObjectID('item7'),
	"ID": 7,
	"title": "Pate de Pui",
	"category": "Dinner",
	"rating": 76,
	"slug": "pate-de-pui",
	"show": true
  },{
	"_id": getObjectID('item8'),
	"ID": 8,
	"title": "Roșie naturală românească",
	"category": "Snack",
	"rating": 94,
	"slug": "roie-natural-romneasc",
	"show": true
  },{
	"_id": getObjectID('item9'),
	"ID": 9,
	"title": "Un măr",
	"category": "Dinner",
	"rating": 66,
	"slug": "un-mr",
	"show": true
  },{
	"_id": getObjectID('item10'),
	"ID": 10,
	"title": "Chipsuri cu aromă de pui",
	"category": "Snack",
	"rating": 49,
	"slug": "chipsuri-cu-arom-de-pui",
	"show": true
  },{
	"_id": getObjectID('item11'),
	"ID": 11,
	"title": "Biscuiți digestivi",
	"category": "Breakfast",
	"rating": 58,
	"slug": "biscuii-digestivi",
	"show": true
  },{
	"_id": getObjectID('item12'),
	"ID": 12,
	"title": "Frigărui cu roșii",
	"category": "Lunch",
	"rating": 80,
	"slug": "frigrui-cu-roii",
	"show": true
  },{
	"_id": getObjectID('item13'),
	"ID": 13,
	"title": "Pâine feliată",
	"category": "Lunch",
	"rating": 48,
	"slug": "pine-feliat",
	"show": true
  },{
	"_id": getObjectID('item14'),
	"ID": 14,
	"title": "Ștrudel cu brânză dulce și stafide",
	"category": "Snack",
	"rating": 74,
	"slug": "trudel-cu-brnz-dulce-i-stafide",
	"show": true
  },{
	"_id": getObjectID('item15'),
	"ID": 15,
	"title": "Prăjiturele cu lapte",
	"category": "Snack",
	"rating": 42,
	"slug": "prjiturele-cu-lapte",
	"show": true
  },{
	"_id": getObjectID('item16'),
	"ID": 16,
	"title": "Legume cu unt",
	"category": "Breakfast",
	"rating": 70,
	"slug": "legume-cu-unt",
	"show": true
  },{
	"_id": getObjectID('item17'),
	"ID": 17,
	"title": "Chicken Nuggets",
	"category": "Lunch",
	"rating": 39,
	"slug": "chicken-nuggets",
	"show": true
  },{
	"_id": getObjectID('item18'),
	"ID": 18,
	"title": "Benisso",
	"category": "Snack",
	"rating": 82,
	"slug": "benisso",
	"show": true
  },{
	"_id": getObjectID('item19'),
	"ID": 19,
	"title": "Fineti cu dublu cremă",
	"category": "Snack",
	"rating": 68,
	"slug": "fineti-cu-dublu-crem",
	"show": true
  },{
	"_id": getObjectID('item20'),
	"ID": 20,
	"title": "Omletă cu salam Victoria",
	"category": "Breakfast",
	"rating": 73,
	"slug": "omlet-cu-salam-victoria",
	"show": true
  },{
	"_id": getObjectID('item21'),
	"ID": 21,
	"title": "Shaorma Socului",
	"category": "Lunch",
	"rating": 53,
	"slug": "shaorma-socului",
	"show": true
  },{
	"_id": getObjectID('item22'),
	"ID": 22,
	"title": "Porumb conservă",
	"category": "Dinner",
	"rating": 52,
	"slug": "porumb-conserv",
	"show": true
  },{
	"_id": getObjectID('item23'),
	"ID": 23,
	"title": "Înghețată cu migdale",
	"category": "Snack",
	"rating": 83,
	"slug": "ngheat-cu-migdale",
	"show": true
  },{
	"_id": getObjectID('item24'),
	"ID": 24,
	"title": "Cereale Fortza",
	"category": "Breakfast",
	"rating": 75,
	"slug": "cereale-fortza",
	"show": true
  },{
	"_id": getObjectID('item25'),
	"ID": 25,
	"title": "Aripioare marinate",
	"category": "Lunch",
	"rating": 60,
	"slug": "aripioare-marinate",
	"show": true
  },{
	"_id": getObjectID('item26'),
	"ID": 26,
	"title": "Moși Crăciuni din ciocolată",
	"category": "Snack",
	"rating": 34,
	"slug": "moi-crciuni-din-ciocolat",
	"show": true
  },{
	"_id": getObjectID('item27'),
	"ID": 27,
	"title": "Salată cu ton",
	"category": "Dinner",
	"rating": 72,
	"slug": "salat-cu-ton",
	"show": true
  },{
	"_id": getObjectID('item28'),
	"ID": 28,
	"title": "Penne cu sos Napoletana",
	"category": "Dinner",
	"rating": 80,
	"slug": "penne-cu-sos-napoletana",
	"show": true
  },{
	"_id": getObjectID('item29'),
	"ID": 29,
	"title": "Iaurt My DUO",
	"category": "Breakfast",
	"rating": 74,
	"slug": "iaurt-my-duo",
	"show": true
  },{
	"_id": getObjectID('item30'),
	"ID": 30,
	"title": "Ceai cu fructe de pădure",
	"category": "Drinks",
	"rating": 53,
	"slug": "ceai-cu-fructe-de-pdure",
	"show": true
  },{
	"_id": getObjectID('item31'),
	"ID": 31,
	"title": "Banane",
	"category": "Breakfast",
	"rating": 72,
	"slug": "banane",
	"show": true
  },{
	"_id": getObjectID('item32'),
	"ID": 32,
	"title": "Ouă fierte",
	"category": "Breakfast",
	"rating": 77,
	"slug": "ou-fierte",
	"show": true
  },{
	"_id": getObjectID('item33'),
	"ID": 33,
	"title": "Mozzarella",
	"category": "Breakfast",
	"rating": 81,
	"slug": "mozzarella",
	"show": true
  },{
	"_id": getObjectID('item34'),
	"ID": 34,
	"title": "Shaorma Koksal",
	"category": "Lunch",
	"rating": 91,
	"slug": "shaorma-koksal",
	"show": true
  },{
	"_id": getObjectID('item35'),
	"ID": 35,
	"title": "Prăjitură Tiramisu",
	"category": "Snack",
	"rating": 17,
	"slug": "prjitur-tiramisu",
	"show": true
  },{
	"_id": getObjectID('item36'),
	"ID": 36,
	"title": "Lapte 1,5% grăsime",
	"category": "Drinks",
	"rating": 65,
	"slug": "lapte-15-grsime",
	"show": true
  },{
	"_id": getObjectID('item37'),
	"ID": 37,
	"title": "Chec",
	"category": "Snack",
	"rating": 46,
	"slug": "chec",
	"show": true
  },{
	"_id": getObjectID('item38'),
	"ID": 38,
	"title": "Bere Heineken",
	"category": "Drinks",
	"rating": 20,
	"slug": "bere-heineken",
	"show": true
  },{
	"_id": getObjectID('item39'),
	"ID": 39,
	"title": "Fish Fingers",
	"category": "Dinner",
	"rating": 78,
	"slug": "fish-fingers",
	"show": true
  },{
	"_id": getObjectID('item40'),
	"ID": 40,
	"title": "Orez",
	"category": "Lunch",
	"rating": 68,
	"slug": "orez",
	"show": true
  },{
	"_id": getObjectID('item41'),
	"ID": 41,
	"title": "Stronbow Gold Apple",
	"category": "Drinks",
	"rating": 71,
	"slug": "stronbow-gold-apple",
	"show": true
  },{
	"_id": getObjectID('item42'),
	"ID": 42,
	"title": "Pulpe inferioare de pui",
	"category": "Lunch",
	"rating": 77,
	"slug": "pulpe-inferioare-de-pui",
	"show": true
  },{
	"_id": getObjectID('item43'),
	"ID": 43,
	"title": "Mâncare de mazăre cu gulaș",
	"category": "Dinner",
	"rating": 79,
	"slug": "mncare-de-mazre-cu-gula",
	"show": true
  },{
	"_id": getObjectID('item44'),
	"ID": 44,
	"title": "Chicken Strips",
	"category": "Lunch",
	"rating": 73,
	"slug": "chicken-strips",
	"show": true
  },{
	"_id": getObjectID('item45'),
	"ID": 45,
	"title": "Biscuiți TUC",
	"category": "Snack",
	"rating": 52,
	"slug": "biscuii-tuc",
	"show": true
  },{
	"_id": getObjectID('item46'),
	"ID": 46,
	"title": "Gogoașă cu ciocolată",
	"category": "Snack",
	"rating": 63,
	"slug": "gogoa-cu-ciocolat",
	"show": true
  },{
	"_id": getObjectID('item47'),
	"ID": 47,
	"title": "Pate de Curcan",
	"category": "Dinner",
	"rating": 72,
	"slug": "pate-de-curcan",
	"show": true
  },{
	"_id": getObjectID('item48'),
	"ID": 48,
	"title": "Ștrudel cu mere",
	"category": "Snack",
	"rating": 78,
	"slug": "trudel-cu-mere",
	"show": true
  },{
	"_id": getObjectID('item49'),
	"ID": 49,
	"title": "Roșii Cherry prunișoare",
	"category": "Dinner",
	"rating": 58,
	"slug": "roii-cherry-prunioare",
	"show": true
  },{
	"_id": getObjectID('item50'),
	"ID": 50,
	"title": "Merdenea",
	"category": "Snack",
	"rating": 76,
	"slug": "merdenea",
	"show": true
  },{
	"_id": getObjectID('item51'),
	"ID": 51,
	"title": "Ciorbă de perișoare",
	"category": "Lunch",
	"rating": 78,
	"slug": "ciorb-de-perioare",
	"show": true
  },{
	"_id": getObjectID('item52'),
	"ID": 52,
	"title": "Ceafă de porc cu piure",
	"category": "Lunch",
	"rating": 68,
	"slug": "ceaf-de-porc-cu-piure",
	"show": true
  },{
	"_id": getObjectID('item53'),
	"ID": 53,
	"title": "Iaurt Müller cu vișine",
	"category": "Breakfast",
	"rating": 69,
	"slug": "iaurt-mller-cu-viine",
	"show": true
  },{
	"_id": getObjectID('item54'),
	"ID": 54,
	"title": "Penne cu pui, ciuperci și smântână",
	"category": "Dinner",
	"rating": 71,
	"slug": "penne-cu-pui-ciuperci-i-smntn",
	"show": true
}];

module.exports = items;