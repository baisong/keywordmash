/**
 * TODO
 *
 * For each ethnic cluster,
 * Create an Ad Campaign
 * Create 12 ad groups:
 * - just names, 
 * - noun suffix,
 * - interest suffix x6
 * - verbs prefix
 * - geo prefix
 * - geo suffix
 * - questions
 *
 * Output template ad text
 */

function suffixArray(arr, string) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
  	newArray.push(arr[i].concat(string));
  }
  return newArray;
}

function union(arr1, arr2) {
  return arr1.concat(arr2);
}

function joinArr(arr1, arr2) {
  var newArray = [];
  console.log('jn:');
console.log(arr1);
console.log(arr2);
console.log('/jn');
	for (var i = 0; i < arr2.length; i++) {
  	newArray = newArray.concat(suffixArray(arr1, arr2[i]));
  }
  return newArray;
}
function sandWich(arr1, arr2, arr3) {
console.log('sw:');
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log('/sw');
  return joinArr(joinArr(arr1, arr2), arr3);
}

function excludeItemsContaining(arr, string) {
 	var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (!arr[i].includes(string)) newArray.push(arr[i]);
  }
  return newArray;
}

var clusters = [
	['somali', 'somalia', 'somalian'],
  ['kenya', 'kenyan', 'ogaden', 'somaliland', 'ogadenian'],
  ['swahili', 'uganda', 'ugandan'],
  ['muslim'],
  ['arabic', 'arab', 'arabian'],
  ['amemsa', 'middle eastern', 'middle-eastern'],
  ['palestine', 'palestinian'],
  ['syria', 'syrian'],
  ['africa', 'african'],
  ['asia', 'asian'],
  ['vietnam', 'vietnamese'],
  ['burma', 'myanmar', 'burmese', 'karen', 'karenni', 'karen-burmese', 'karen burmese', 'thai', 'thailand'],
  ['afghanistan', 'afghan', 'afghani'],
  ['iraq', 'iraqi'],
  ['chaldean', 'chaldean-iraqi', 'iraqi-chaldean', 'christian iraqi', 'iraqi christian'],
  ['congo', 'congolese', 'drc'],
  ['sudan', 'sudanese', 'south sudan', 'south sudanese'],
  ['bantu', 'somali bantu', 'kizigula', 'zigula'],
  ['east african', 'east africa', 'horn of africa'], 
  ['ethiopia', 'ethiopian'],
  ['djibouti', 'djiboutian'],
  ['bhutan', 'bhutanese', 'hmong'],
  ['iran', 'irani', 'iranian'],
  ['eritrea', 'eritrean'],
  ['amharic', 'oromo', 'tigrinya'],
  ['global', 'international'],
  ['uzbeki', 'uzbek', 'uzbekistan']
];

for (var ii = 0; ii < clusters.length; ii++) {
var a = clusters[ii];
var a_plural = suffixArray(a, "s");
var b = ['speaking', 'born', 'american'];
var c = ['women', 'men', 'youth', 'children', 'boys', 'girls', 'families', 'seniors', 'elderly', 'elders'];
var d = ['immigrant', 'migrant', 'refugee', 'newcomer', 'citizen', 'neighbor', 'resident', 'american'];
var d_plural = ['immigrants', 'migrants', 'refugees', 'newcomers', 'people', 'nieghbors', 'residents', 'americans'];

var keywords = [];
// a
keywords = keywords.concat(a);
// a_plural
keywords = keywords.concat(a_plural);
// d
keywords = keywords.concat(d);
// d_plural
keywords = keywords.concat(d_plural);
// a + (" " OR "-") + b  . . . (AB)
var AB = sandWich(a, [" ", "-"], b);
keywords = keywords.concat(AB);
// (a OR AB) + " " + c . . . . (ABC)
var ABC = sandWich(union(a,AB)," ",c);
keywords = keywords.concat(ABC);
// (a OR AB) + " " + (d OR d_plural). . . . (ABD)
var ABD = sandWich(union(a,AB)," ",union(d,d_plural));
keywords = keywords.concat(ABD);
keywords = keywords.concat(suffixArray(a, "-americans"));
keywords = excludeItemsContaining(keywords, "american american");
// ABC + " " + (d OR d_plural) . . . (ABCD)

var nouns_suffix = [
  '~ community',
  '~ communities',
  '~ org',
  '~ orgs',
  '~ organization',
  '~ organizations',
  '~ organizing',
  '~ organizer',
  '~ organizers',
  '~ community organizer',
  '~ community organizers',
  '~ community organizing',
  '~ nonprofit',
  '~ nonprofits',
  '~ non-profit',
  '~ non-profits',
  '~ non profit',
  '~ non profits',
  '~ nonprofit organization',
  '~ nonprofit organizations',
  '~ non-profit organization',
  '~ non-profit organizations',
  '~ non profit organization',
  '~ non profit organizations'
  ];
  /*
  '~ leader',
  '~ leaders',
  '~ leadership',
  '~ leadership development',
  '~ lawyer',
  '~ lawyers',
  '~ legislation',
  '~ representative',
  '~ representatives',
  '~ politician',
  '~ politicians',
  '~ ally',
  '~ allies',
  '~ alliance',
  '~ alliances',
  '~ coalition',
  '~ coalitions',
  '~ rights',
  '~ help',
  '~ support',
  '~ solidarity',
  '~ event',
  '~ events',
  '~ charity',
  '~ charities',
  '~ initiative',
  '~ initiatives',
  '~ advocacy',
  '~ advocate',
  '~ advocates',
  '~ policy',
  '~ policies',
  '~ policy advocacy',
  '~ pac',
  '~ pacs',
  '~ job',
  '~ jobs',
  '~ housing',
  '~ integration',
  '~ reception',
  '~ welcome',
  '~ welcoming',
  '~ service',
  '~ services',
  '~ need',
  '~ needs',
  '~ affordable housing',
  '~ health',
  '~ public health',
  '~ nutrition',
  '~ education',
  '~ career',
  '~ careers',
  '~ livelihood',
  '~ livelihoods',
  '~ political',
  '~ political advocacy',
  '~ political advocate',
  '~ political advocates',
  '~ policy research',
  '~ research',
  '~ project',
  '~ projects',
  '~ donate',
  '~ fundraiser',
  '~ fundraisers',
  '~ inclusion',
  '~ legal aid',
  '~ network',
  '~ networks',
  '~ community center',
  '~ community centers',
  '~ volunteer',
  '~ volunteering',
  '~ resource',
  '~ resources',
  '~ resource center',
  '~ resource centers',
  '~ school',
  '~ schools',
  '~ program',
  '~ programs',
  '~ action',
  '~ activist',
  '~ activists',
  '~ activism',
  '~ voting',
  '~ voter',
  '~ voters',
  '~ voting rights',
  '~ outreach',
  '~ community outreach',
  '~ voter outreach',
  '~ expert',
  '~ experts',
  '~ professional',
  '~ professionals',
  '~ cultural competency',
  '~ movement',
  '~ justice',
  '~ social justice',
  '~ freedom',
  '~ business',
  '~ businesses',
  '~ business owner',
  '~ business owners',
  '~ home owners',
  '~ home ownership',
  '~ civic engagement',
  '~ empowerment',
  '~ voice',
  '~ voices'
];*/

var topics = [
  '~ law',
  '~ laws',
  '~ bill',
  '~ bills',
  '~ legislation'
];
/*
var verbs_prefix = [
	'donate ~',
  'donating ~',
  'how to donate ~',
  'donate to ~',
  'donating to ~',
  'how to donate to ~',
  'give ~',
  'giving ~',
  'how to give ~',
  'give to ~',
  'giving to ~',
  'how to give to ~',
  'give money ~',
  'giving money ~',
  'how to give money ~',
  'give money to ~',
  'giving money to ~',
  'how to give money to ~',
  'support ~',
  'supporting ~',
  'how to support ~',
  'stand with ~',
  'standing with ~',
  'how to stand with ~',
  'stand up for ~',
  'standing up for ~',
  'how to stand up for ~',
  'solidarity ~',
  'solidarity with ~',
  'help ~',
  'helping ~',
  'how to help ~',
  'volunteer ~',
  'volunteering ~',
  'how to volunteer ~',
  'volunteer with ~',
  'volunteering with ~',
  'how to volunteer with ~',
  'volunteer for ~',
  'volunteering for ~',
  'how to volunteer for ~',
  'take action ~',
  'taking action ~',
  'how to take action ~',
  'take action for ~',
  'taking action for ~',
  'how to take action for ~',
  'about ~',
  'find ~',
  'learn ~',
  'learn about ~'
];*/
var verbs_prefix = [
  'donate to ~',
  'give to ~',
  'give money to ~',
  'support ~',
  'volunteer with ~',
  'volunteer for ~',
  'take action for ~'
];
var IMM_prefix = ['new', 'recent'];

var GEO_prefix = [
  'california ~',
  "california's ~",
  'californian ~',
  'san diego ~',
  "san diego's ~",
  'san diegan ~',
  'los angeles ~',
  'american ~',
  'u.s. ~',
  'united states ~',
  'usa ~'
];
var geo_suffix = [
  '~ in san diego',
  '~ in california',
  '~ in san diego ca',
  '~ in san diego california',
  '~ in us',
  '~ in u.s.',
  '~ in usa',
  '~ in united states',
  '~ in america'
];
var QUESTIONS = [
  'where are ~ from',
  'where do ~ come from',
  'where do ~ live',
  'where in san diego do ~ live',
  'where are san diego ~ from',
  'where do san diego ~ live',
  'what language do ~ speak',
  'what language do ~ know',
  'what religion are ~',
  'what country are ~ from',
  '~ from what country',
  'what country do ~ come from',
  '~ country',
  '~ language',
  '~ religion',
  '~ holiday',
  '~ holidays',
  '~ festival',
  '~ festivals',
  '~ culture',
  '~ cultures',
  '~ art',
  '~ artist',
  '~ artists',
  '~ music',
  '~ musician',
  '~ musicians',
  '~ language',
  '~ languages',
  '~ poetry',
  '~ poet',
  '~ poets'
];
for (var i = 0; i < geo_suffix.length; i++) {
  var theParent = document.getElementById("content");
  var tpl = geo_suffix[i];
  for (var j = 0; j < keywords.length; j++) {
  		var theKid = document.createElement("div");
      var ethnicity = keywords[j];
      theKid.innerHTML = tpl.replace('~', ethnicity);
      theParent.appendChild(theKid);
  }
}
}
