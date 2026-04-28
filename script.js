const countries = [
  { name: 'Afghanistan', region: 'Asia', hint: 'Known for the Wakhan Corridor and rugged highlands.' },
  { name: 'Albania', region: 'Europe', hint: 'A Balkan nation with Adriatic beaches and Ottoman history.' },
  { name: 'Algeria', region: 'Africa', hint: 'The largest country in Africa by land area.' },
  { name: 'Andorra', region: 'Europe', hint: 'A tiny Pyrenean state known for skiing and tax-free shopping.' },
  { name: 'Angola', region: 'Africa', hint: 'Rich in oil with a long Atlantic coastline.' },
  { name: 'Antigua and Barbuda', region: 'North America', hint: 'A Caribbean nation with 365 beaches.' },
  { name: 'Argentina', region: 'South America', hint: 'Famous for tango, beef, and the Pampas.' },
  { name: 'Armenia', region: 'Asia', hint: 'Home to ancient monasteries and the source of the apricot.' },
  { name: 'Australia', region: 'Oceania', hint: 'A continent-country with the Great Barrier Reef and kangaroos.' },
  { name: 'Austria', region: 'Europe', hint: 'Known for classical music, alpine landscapes, and coffee houses.' },
  { name: 'Azerbaijan', region: 'Asia', hint: 'A Caspian Sea nation famous for fire temples and modern Baku.' },
  { name: 'Bahamas', region: 'North America', hint: 'An archipelago of over 700 islands in the Caribbean.' },
  { name: 'Bahrain', region: 'Asia', hint: 'A small island kingdom in the Persian Gulf.' },
  { name: 'Bangladesh', region: 'Asia', hint: 'A densely populated country centered on the Ganges Delta.' },
  { name: 'Barbados', region: 'North America', hint: 'A Caribbean island famous for beaches and rum.' },
  { name: 'Belarus', region: 'Europe', hint: 'A landlocked Eastern European country with large forests.' },
  { name: 'Belgium', region: 'Europe', hint: 'Known for chocolate, waffles, and Brussels political institutions.' },
  { name: 'Belize', region: 'North America', hint: 'A Central American nation with coral reefs and Mayan ruins.' },
  { name: 'Benin', region: 'Africa', hint: 'A West African country famous for voodoo culture and historic towns.' },
  { name: 'Bhutan', region: 'Asia', hint: 'A Himalayan kingdom measuring success by Gross National Happiness.' },
  { name: 'Bolivia', region: 'South America', hint: 'Home to the Salar de Uyuni salt flats and high Andes.' },
  { name: 'Bosnia and Herzegovina', region: 'Europe', hint: 'A Balkan country known for its Ottoman bridges and cultural mix.' },
  { name: 'Botswana', region: 'Africa', hint: 'A landlocked nation famous for wildlife and the Okavango Delta.' },
  { name: 'Brazil', region: 'South America', hint: 'Hosts the Amazon rainforest and the world’s biggest carnival.' },
  { name: 'Brunei', region: 'Asia', hint: 'A small wealthy Sultanate on the island of Borneo.' },
  { name: 'Bulgaria', region: 'Europe', hint: 'A Black Sea country famous for roses and yogurt.' },
  { name: 'Burkina Faso', region: 'Africa', hint: 'A West African country known for music and art festivals.' },
  { name: 'Burundi', region: 'Africa', hint: 'A small East African nation with Lake Tanganyika shoreline.' },
  { name: 'Cabo Verde', region: 'Africa', hint: 'An island nation off West Africa with volcanic scenery.' },
  { name: 'Cambodia', region: 'Asia', hint: 'Home to the temples of Angkor Wat and the Mekong River.' },
  { name: 'Cameroon', region: 'Africa', hint: 'A diverse African country with rainforests and Mount Cameroon.' },
  { name: 'Canada', region: 'North America', hint: 'Second largest country by area with thousands of lakes.' },
  { name: 'Central African Republic', region: 'Africa', hint: 'A landlocked country with dense tropical forests.' },
  { name: 'Chad', region: 'Africa', hint: 'A Sahel country that borders the Sahara Desert.' },
  { name: 'Chile', region: 'South America', hint: 'A long Pacific coast nation stretching from deserts to glaciers.' },
  { name: 'China', region: 'Asia', hint: 'Home to the Great Wall and the world’s largest population.' },
  { name: 'Colombia', region: 'South America', hint: 'Known for coffee, Andes mountains, and Caribbean beaches.' },
  { name: 'Comoros', region: 'Africa', hint: 'A small volcanic island nation in the Indian Ocean.' },
  { name: 'Costa Rica', region: 'North America', hint: 'A Central American country known for rainforests and biodiversity.' },
  { name: 'Cote dIvoire', region: 'Africa', hint: 'A West African country known for cocoa and vibrant markets.' },
  { name: 'Croatia', region: 'Europe', hint: 'Known for historic walled cities and Adriatic coastlines.' },
  { name: 'Cuba', region: 'North America', hint: 'A Caribbean island famous for classic cars and salsa music.' },
  { name: 'Cyprus', region: 'Europe', hint: 'An eastern Mediterranean island with Greek and Turkish heritage.' },
  { name: 'Czech Republic', region: 'Europe', hint: 'Known for Prague’s Gothic architecture and beer culture.' },
  { name: 'Denmark', region: 'Europe', hint: 'Often ranked among the happiest countries and known for Danish design.' },
  { name: 'Djibouti', region: 'Africa', hint: 'A Horn of Africa country with salt lakes and volcanic landscapes.' },
  { name: 'Dominica', region: 'North America', hint: 'A Caribbean island known for rainforests and boiling lake.' },
  { name: 'Dominican Republic', region: 'North America', hint: 'Shares the island of Hispaniola with Haiti.' },
  { name: 'Ecuador', region: 'South America', hint: 'Straddles the equator and includes the Galapagos Islands.' },
  { name: 'Egypt', region: 'Africa', hint: 'Known for ancient pyramids, the Nile, and pharaonic history.' },
  { name: 'El Salvador', region: 'North America', hint: 'The smallest Central American nation with Pacific beaches.' },
  { name: 'Equatorial Guinea', region: 'Africa', hint: 'A Central African country that includes island territories.' },
  { name: 'Eritrea', region: 'Africa', hint: 'A Red Sea nation with ancient coastal towns and highlands.' },
  { name: 'Estonia', region: 'Europe', hint: 'A Baltic nation known for medieval cities and digital services.' },
  { name: 'Eswatini', region: 'Africa', hint: 'A small kingdom known for wildlife reserves and cultural festivals.' },
  { name: 'Ethiopia', region: 'Africa', hint: 'A highland country with ancient history and coffee origins.' },
  { name: 'Fiji', region: 'Oceania', hint: 'An island nation famous for coral reefs and tropical resorts.' },
  { name: 'Finland', region: 'Europe', hint: 'Known for saunas, lakes, and northern lights.' },
  { name: 'France', region: 'Europe', hint: 'Famous for wine, cheese, cuisine, and the Eiffel Tower.' },
  { name: 'Gabon', region: 'Africa', hint: 'A forested Central African country with wildlife parks.' },
  { name: 'Gambia', region: 'Africa', hint: 'A tiny West African country centered on the Gambia River.' },
  { name: 'Georgia', region: 'Asia', hint: 'A crossroad nation between Europe and Asia known for wine.' },
  { name: 'Germany', region: 'Europe', hint: 'Known for engineering, castles, and Oktoberfest.' },
  { name: 'Ghana', region: 'Africa', hint: 'A West African country known for gold and cultural heritage.' },
  { name: 'Greece', region: 'Europe', hint: 'Birthplace of democracy with ancient ruins and islands.' },
  { name: 'Grenada', region: 'North America', hint: 'A Caribbean island known as the Spice Isle.' },
  { name: 'Guatemala', region: 'North America', hint: 'A Central American nation with Mayan ruins and volcanoes.' },
  { name: 'Guinea', region: 'Africa', hint: 'A West African country with coastal rainforest and savanna.' },
  { name: 'Guinea-Bissau', region: 'Africa', hint: 'A coastal West African state with islands and wildlife.' },
  { name: 'Guyana', region: 'South America', hint: 'A South American country with English as its official language.' },
  { name: 'Haiti', region: 'North America', hint: 'Shares Hispaniola with the Dominican Republic and has rich folklore.' },
  { name: 'Honduras', region: 'North America', hint: 'A Central American nation with Caribbean and Pacific coasts.' },
  { name: 'Hungary', region: 'Europe', hint: 'Known for Budapest, thermal baths, and paprika.' },
  { name: 'Iceland', region: 'Europe', hint: 'A volcanic island with glaciers, geysers, and midnight sun.' },
  { name: 'India', region: 'Asia', hint: 'A diverse nation with billions of people and many languages.' },
  { name: 'Indonesia', region: 'Asia', hint: 'An archipelago of thousands of islands including Bali and Java.' },
  { name: 'Iran', region: 'Asia', hint: 'A Persian nation with ancient ruins and rich culture.' },
  { name: 'Iraq', region: 'Asia', hint: 'Home to ancient Mesopotamia between the Tigris and Euphrates.' },
  { name: 'Ireland', region: 'Europe', hint: 'An island nation known for green countryside and Celtic culture.' },
  { name: 'Israel', region: 'Asia', hint: 'A Middle Eastern country with historical, religious, and tech centers.' },
  { name: 'Italy', region: 'Europe', hint: 'Known for pasta, pizza, Renaissance art, and ancient Rome.' },
  { name: 'Jamaica', region: 'North America', hint: 'A Caribbean island known for reggae and jerk cuisine.' },
  { name: 'Japan', region: 'Asia', hint: 'Known for sushi, anime, high-speed trains, and Mount Fuji.' },
  { name: 'Jordan', region: 'Asia', hint: 'Famous for Petra, the Dead Sea, and desert landscapes.' },
  { name: 'Kazakhstan', region: 'Asia', hint: 'A vast Central Asian country spanning steppe and mountains.' },
  { name: 'Kenya', region: 'Africa', hint: 'A safari destination known for wildlife and the Great Rift Valley.' },
  { name: 'Kiribati', region: 'Oceania', hint: 'A Pacific island nation made of atolls near the equator.' },
  { name: 'Kuwait', region: 'Asia', hint: 'A wealthy Gulf state with modern skyscrapers and oil exports.' },
  { name: 'Kyrgyzstan', region: 'Asia', hint: 'A mountainous Central Asian country with nomadic heritage.' },
  { name: 'Laos', region: 'Asia', hint: 'A landlocked Southeast Asian country with Mekong River scenery.' },
  { name: 'Latvia', region: 'Europe', hint: 'A Baltic country with forests, coastlines, and medieval towns.' },
  { name: 'Lebanon', region: 'Asia', hint: 'A Mediterranean country with ancient ruins and rich cuisine.' },
  { name: 'Lesotho', region: 'Africa', hint: 'A high-altitude African kingdom entirely surrounded by South Africa.' },
  { name: 'Liberia', region: 'Africa', hint: 'Founded by freed American slaves on the west African coast.' },
  { name: 'Libya', region: 'Africa', hint: 'A large North African country with Sahara deserts and Mediterranean coast.' },
  { name: 'Liechtenstein', region: 'Europe', hint: 'A tiny Alpine principality between Switzerland and Austria.' },
  { name: 'Lithuania', region: 'Europe', hint: 'A Baltic state with rich folk traditions and baroque architecture.' },
  { name: 'Luxembourg', region: 'Europe', hint: 'A small wealthy Grand Duchy in the heart of Europe.' },
  { name: 'Madagascar', region: 'Africa', hint: 'An island with unique wildlife like lemurs and baobab trees.' },
  { name: 'Malawi', region: 'Africa', hint: 'A landlocked country famous for Lake Malawi.' },
  { name: 'Malaysia', region: 'Asia', hint: 'A Southeast Asian country split between peninsular and Borneo regions.' },
  { name: 'Maldives', region: 'Asia', hint: 'A tropical island chain of atolls in the Indian Ocean.' },
  { name: 'Mali', region: 'Africa', hint: 'A landlocked West African nation with historic Timbuktu.' },
  { name: 'Malta', region: 'Europe', hint: 'A tiny Mediterranean archipelago rich in history and architecture.' },
  { name: 'Marshall Islands', region: 'Oceania', hint: 'A remote Pacific island republic of atolls and lagoons.' },
  { name: 'Mauritania', region: 'Africa', hint: 'A Saharan country with desert dunes and Atlantic coastline.' },
  { name: 'Mauritius', region: 'Africa', hint: 'A volcanic island nation in the Indian Ocean known for beaches.' },
  { name: 'Mexico', region: 'North America', hint: 'Famous for tacos, ancient ruins, and vibrant culture.' },
  { name: 'Micronesia', region: 'Oceania', hint: 'A Pacific island federation spread across thousands of reefs.' },
  { name: 'Moldova', region: 'Europe', hint: 'A landlocked Eastern European country known for wine.' },
  { name: 'Monaco', region: 'Europe', hint: 'A tiny Mediterranean principality known for casinos and racing.' },
  { name: 'Mongolia', region: 'Asia', hint: 'A vast land of steppes, nomads, and Genghis Khan history.' },
  { name: 'Montenegro', region: 'Europe', hint: 'A Balkan country with dramatic mountains and Adriatic coast.' },
  { name: 'Morocco', region: 'Africa', hint: 'Known for markets, deserts, and the Atlas Mountains.' },
  { name: 'Mozambique', region: 'Africa', hint: 'A Southeast African coastline nation with coral reefs.' },
  { name: 'Myanmar', region: 'Asia', hint: 'A Southeast Asian country with temples, rivers, and tropical forests.' },
  { name: 'Namibia', region: 'Africa', hint: 'Known for the Namib Desert and rich wildlife.' },
  { name: 'Nauru', region: 'Oceania', hint: 'The world’s smallest republic, an island nation in the Pacific.' },
  { name: 'Nepal', region: 'Asia', hint: 'A Himalayan nation home to Everest and ancient temples.' },
  { name: 'Netherlands', region: 'Europe', hint: 'Famous for canals, tulips, windmills, and flat landscapes.' },
  { name: 'New Zealand', region: 'Oceania', hint: 'Known for dramatic landscapes, Maori culture, and adventure sports.' },
  { name: 'Nicaragua', region: 'North America', hint: 'A Central American country with lakes, volcanoes, and colonial cities.' },
  { name: 'Niger', region: 'Africa', hint: 'A landlocked Sahel nation with desert and river valley landscapes.' },
  { name: 'Nigeria', region: 'Africa', hint: 'Africa’s most populous country with vibrant cities and culture.' },
  { name: 'North Korea', region: 'Asia', hint: 'A secretive East Asian state on the Korean Peninsula.' },
  { name: 'North Macedonia', region: 'Europe', hint: 'A Balkan nation with lakes and ancient ruins.' },
  { name: 'Norway', region: 'Europe', hint: 'Famous for fjords, northern lights, and coastal scenery.' },
  { name: 'Oman', region: 'Asia', hint: 'A Arabian Peninsula country with deserts and historic forts.' },
  { name: 'Pakistan', region: 'Asia', hint: 'A South Asian country with mountains, rivers, and ancient sites.' },
  { name: 'Palau', region: 'Oceania', hint: 'A tiny Pacific island nation known for diving.' },
  { name: 'Panama', region: 'North America', hint: 'Famous for its canal linking Atlantic and Pacific oceans.' },
  { name: 'Papua New Guinea', region: 'Oceania', hint: 'A Melanesian country with rainforests and tribal cultures.' },
  { name: 'Paraguay', region: 'South America', hint: 'A landlocked country in the heart of South America.' },
  { name: 'Peru', region: 'South America', hint: 'Home to Machu Picchu, the Andes, and the Amazon.' },
  { name: 'Philippines', region: 'Asia', hint: 'An archipelago of over 7,000 islands in Southeast Asia.' },
  { name: 'Poland', region: 'Europe', hint: 'A Central European country with medieval cities and history.' },
  { name: 'Portugal', region: 'Europe', hint: 'Known for maritime heritage, fado music, and coastal towns.' },
  { name: 'Qatar', region: 'Asia', hint: 'A wealthy Gulf state with modern development and desert dunes.' },
  { name: 'Romania', region: 'Europe', hint: 'Known for Carpathian mountains, castles, and folklore.' },
  { name: 'Russia', region: 'Europe/Asia', hint: 'The largest country in the world spanning two continents.' },
  { name: 'Rwanda', region: 'Africa', hint: 'A hilly East African nation with gorilla tourism.' },
  { name: 'Saint Kitts and Nevis', region: 'North America', hint: 'A two-island Caribbean federation with beaches and rainforests.' },
  { name: 'Saint Lucia', region: 'North America', hint: 'A Caribbean island known for the Pitons and resorts.' },
  { name: 'Saint Vincent and the Grenadines', region: 'North America', hint: 'A Caribbean island chain with sailing and diving.' },
  { name: 'Samoa', region: 'Oceania', hint: 'A Polynesian island nation known for cultural traditions.' },
  { name: 'San Marino', region: 'Europe', hint: 'A tiny enclave republic surrounded by Italy.' },
  { name: 'Sao Tome and Principe', region: 'Africa', hint: 'A small island nation in the Gulf of Guinea.' },
  { name: 'Saudi Arabia', region: 'Asia', hint: 'A large Arabian Peninsula state with deserts and holy cities.' },
  { name: 'Senegal', region: 'Africa', hint: 'A West African country with music, beaches, and historic Dakar.' },
  { name: 'Serbia', region: 'Europe', hint: 'A Balkan nation with historic Belgrade and river valleys.' },
  { name: 'Seychelles', region: 'Africa', hint: 'A tropical Indian Ocean island republic with granite beaches.' },
  { name: 'Sierra Leone', region: 'Africa', hint: 'A West African nation with Atlantic beaches and rainforests.' },
  { name: 'Singapore', region: 'Asia', hint: 'A modern city-state known for clean streets and gardens.' },
  { name: 'Slovakia', region: 'Europe', hint: 'A Central European country with mountains and castles.' },
  { name: 'Slovenia', region: 'Europe', hint: 'Known for lakes, caves, and alpine scenery.' },
  { name: 'Solomon Islands', region: 'Oceania', hint: 'A Pacific island nation with WWII history and reefs.' },
  { name: 'Somalia', region: 'Africa', hint: 'A Horn of Africa country with a long Indian Ocean coast.' },
  { name: 'South Africa', region: 'Africa', hint: 'A diverse nation with coastlines, wildlife, and three capitals.' },
  { name: 'South Korea', region: 'Asia', hint: 'A technology and pop culture powerhouse on the Korean Peninsula.' },
  { name: 'South Sudan', region: 'Africa', hint: 'A young nation located in northeastern Central Africa.' },
  { name: 'Spain', region: 'Europe', hint: 'Famous for flamenco, paella, and diverse regions.' },
  { name: 'Sri Lanka', region: 'Asia', hint: 'An island nation with ancient temples and tea plantations.' },
  { name: 'Sudan', region: 'Africa', hint: 'A large Northeastern African country with Nile valleys.' },
  { name: 'Suriname', region: 'South America', hint: 'A small South American nation with tropical rainforest.' },
  { name: 'Sweden', region: 'Europe', hint: 'Known for Nordic design, forests, and archipelagos.' },
  { name: 'Switzerland', region: 'Europe', hint: 'Famous for watches, chocolate, and Alpine scenery.' },
  { name: 'Syria', region: 'Asia', hint: 'A Levant country with ancient sites and historical cities.' },
  { name: 'Taiwan', region: 'Asia', hint: 'An island nation known for its night markets and tech industry.' },
  { name: 'Tajikistan', region: 'Asia', hint: 'A mountainous Central Asian country with rugged terrain.' },
  { name: 'Tanzania', region: 'Africa', hint: 'Home to Mount Kilimanjaro and Serengeti wildlife.' },
  { name: 'Thailand', region: 'Asia', hint: 'Known for temples, cuisine, beaches, and Bangkok.' },
  { name: 'Timor-Leste', region: 'Asia', hint: 'A Southeast Asian country with rugged coastlines and history.' },
  { name: 'Togo', region: 'Africa', hint: 'A narrow West African country with coastal lagoons.' },
  { name: 'Tonga', region: 'Oceania', hint: 'A Polynesian kingdom made up of dozens of South Pacific islands.' },
  { name: 'Trinidad and Tobago', region: 'North America', hint: 'A Caribbean twin-island nation known for Carnival and steelpan.' },
  { name: 'Tunisia', region: 'Africa', hint: 'A North African country with Mediterranean beaches and ruins.' },
  { name: 'Turkey', region: 'Asia/Europe', hint: 'Straddles two continents and is home to Istanbul.' },
  { name: 'Turkmenistan', region: 'Asia', hint: 'A Central Asian country with desert gas fields and marble cities.' },
  { name: 'Tuvalu', region: 'Oceania', hint: 'One of the world’s smallest island nations in the Pacific.' },
  { name: 'Uganda', region: 'Africa', hint: 'Known for Lake Victoria, gorillas, and tropical rainforests.' },
  { name: 'Ukraine', region: 'Europe', hint: 'A large Eastern European country with steppes and Black Sea coast.' },
  { name: 'United Arab Emirates', region: 'Asia', hint: 'A Gulf federation famous for Dubai and Abu Dhabi.' },
  { name: 'United Kingdom', region: 'Europe', hint: 'Includes England, Scotland, Wales, and Northern Ireland.' },
  { name: 'United States', region: 'North America', hint: 'A federation of 50 states with coast-to-coast landmarks.' },
  { name: 'Uruguay', region: 'South America', hint: 'A small South American country with beaches and gauchos.' },
  { name: 'Uzbekistan', region: 'Asia', hint: 'A Central Asian country with Silk Road cities like Samarkand.' },
  { name: 'Vanuatu', region: 'Oceania', hint: 'A South Pacific island nation with volcanoes and reefs.' },
  { name: 'Vatican City', region: 'Europe', hint: 'The world’s smallest independent state, inside Rome.' },
  { name: 'Venezuela', region: 'South America', hint: 'Known for Angel Falls, oil reserves, and Caribbean beaches.' },
  { name: 'Vietnam', region: 'Asia', hint: 'A Southeast Asian country with rice fields and vibrant cities.' },
  { name: 'Yemen', region: 'Asia', hint: 'A Arabian Peninsula nation with ancient architecture and deserts.' },
  { name: 'Zambia', region: 'Africa', hint: 'Home to Victoria Falls and rich wildlife parks.' },
  { name: 'Zimbabwe', region: 'Africa', hint: 'Known for Victoria Falls and ancient stone ruins.' },
  { name: 'Palestine', region: 'Asia', hint: 'A territory in the Levant with historic cities like Ramallah and Hebron.' },
  { name: 'Kosovo', region: 'Europe', hint: 'A young Balkan state with a rich cultural mix.' }
];

const MAX_TARGETS = 15;
const TURN_PENALTY = 15;

const countryMaskEl = document.getElementById('country-mask');
const turnCountEl = document.getElementById('turn-count');
const guessedCountEl = document.getElementById('guessed-count');
const hintTextEl = document.getElementById('hint-text');
const letterInput = document.getElementById('letter-input');
const countryInput = document.getElementById('country-input');
const guessLetterBtn = document.getElementById('guess-letter-btn');
const guessCountryBtn = document.getElementById('guess-country-btn');
const newGameBtn = document.getElementById('new-game-btn');
const gameLog = document.getElementById('game-log');
const modeInputs = document.querySelectorAll('input[name="game-mode"]');
const descriptionEl = document.getElementById('game-description');
const countryPicker = document.getElementById('country-picker');
const countrySelect = document.getElementById('country-select');
const startDuelBtn = document.getElementById('start-duel-btn');
const mainGame = document.getElementById('main-game');
const duelPanel = document.getElementById('duel-panel');
const computerMaskEl = document.getElementById('computer-mask');
const humanMaskEl = document.getElementById('human-mask');
const computerHintTextEl = document.getElementById('computer-hint-text');
const humanHintTextEl = document.getElementById('human-hint-text');
const duelLetterInput = document.getElementById('duel-letter-input');
const duelCountryInput = document.getElementById('duel-country-input');
const duelGuessLetterBtn = document.getElementById('duel-guess-letter-btn');
const duelGuessCountryBtn = document.getElementById('duel-guess-country-btn');
const gameLogDuel = document.getElementById('game-log-duel');
const computerThinkingEl = document.getElementById('computer-thinking');

countries.forEach(c => {
  const option = document.createElement('option');
  option.value = c.name;
  option.textContent = c.name;
  countrySelect.appendChild(option);
});

let currentCountry = null;
let displayedMask = '';
let guessedLetters = new Set();
let totalTurns = 0;
let guessedCount = 0;
let completed = false;
let gameMode = 'classic';
let usedCountryNames = new Set();
let currentHintIndex = 0;
let shownHints = [];
let duelMode = false;
let humanCountry = null;
let computerCountry = null;
let humanMask = '';
let computerMask = '';
let humanGuessedLetters = new Set();
let computerGuessedLetters = new Set();
let humanHints = [];
let computerHints = [];
let humanHintIndex = 0;
let computerHintIndex = 0;
let humanShownHints = [];
let computerShownHints = [];
let duelCompleted = false;

function normalize(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z\s]/g, '')
    .trim();
}

function createMask(country) {
  return country
    .split('')
    .map((char) => (char === ' ' ? ' ' : '_'))
    .join('');
}

function formatDescription() {
  if (duelMode) {
    return `Duel mode: Guess the computer's country while it guesses yours.`;
  }
  return gameMode === 'classic'
    ? 'Guess 15 countries in as few turns as possible.'
    : 'Practice endlessly with new countries and hints each turn.';
}

function updateDisplay() {
  if (duelMode) {
    computerMaskEl.textContent = computerMask;
    humanMaskEl.textContent = humanMask;
    computerHintTextEl.textContent = computerShownHints.join('\n');
    humanHintTextEl.textContent = humanShownHints.join('\n');
    descriptionEl.textContent = formatDescription();
  } else {
    countryMaskEl.textContent = displayedMask;
    turnCountEl.textContent = totalTurns;
    guessedCountEl.textContent = gameMode === 'classic'
      ? `${guessedCount} / ${MAX_TARGETS}`
      : `${guessedCount}`;
    descriptionEl.textContent = formatDescription();
  }
}

function addLog(message) {
  const entry = document.createElement('div');
  entry.className = 'log-entry';
  entry.textContent = message;
  if (duelMode) {
    gameLogDuel.prepend(entry);
  } else {
    gameLog.prepend(entry);
  }
}

function getCountryHints(country) {
  const baseHints = [country.hint];
  const derivedHints = [
    `Located in ${country.region}.`, 
    `The name starts with '${country.name[0]}'.`,
    `The name has ${country.name.replace(/ /g, '').length} letters and ${country.name.split(' ').length} word${country.name.split(' ').length > 1 ? 's' : ''}.`,
    `The name contains ${country.name.toLowerCase().match(/[aeiou]/g)?.length || 0} vowels.`
  ];
  return [...baseHints, ...derivedHints];
}

function showNextHint() {
  if (!currentCountry) return;
  if (currentHintIndex < currentCountry.hints.length) {
    shownHints.push(currentCountry.hints[currentHintIndex]);
    currentHintIndex += 1;
    hintTextEl.textContent = shownHints.join('\n');
  }
}

function showNextDuelHints() {
  if (humanHintIndex < humanHints.length) {
    humanShownHints.push(humanHints[humanHintIndex]);
    humanHintIndex += 1;
  }
  if (computerHintIndex < computerHints.length) {
    computerShownHints.push(computerHints[computerHintIndex]);
    computerHintIndex += 1;
  }
}

function chooseCountry(exclude = null) {
  if (gameMode === 'classic' && guessedCount >= MAX_TARGETS) {
    return null;
  }

  let pool = countries;
  if (gameMode === 'classic') {
    pool = countries.filter((item) => !usedCountryNames.has(item.name));
  }
  if (exclude) {
    pool = pool.filter((item) => item.name !== exclude.name);
  }

  if (pool.length === 0) {
    return null;
  }

  return pool[Math.floor(Math.random() * pool.length)];
}

function startDuel() {
  humanCountry = countries.find(c => c.name === countrySelect.value);
  if (!humanCountry) return;
  computerCountry = chooseCountry(humanCountry);
  if (!computerCountry) return;

  humanMask = createMask(humanCountry.name);
  computerMask = createMask(computerCountry.name);
  humanGuessedLetters.clear();
  computerGuessedLetters.clear();
  humanHints = getCountryHints(humanCountry);
  computerHints = getCountryHints(computerCountry);
  humanHintIndex = 0;
  computerHintIndex = 0;
  humanShownHints = [];
  computerShownHints = [];
  duelCompleted = false;

  showNextDuelHints();
  addLog(`Duel started! You picked ${humanCountry.name}. Computer picked a secret country.`);
  updateDisplay();
}

function startCountry() {
  currentCountry = chooseCountry();
  if (!currentCountry) {
    endGame();
    return;
  }

  displayedMask = createMask(currentCountry.name);
  guessedLetters.clear();
  completed = false;
  currentCountry.hints = getCountryHints(currentCountry);
  currentHintIndex = 0;
  shownHints = [];
  showNextHint();

  if (gameMode === 'classic') {
    usedCountryNames.add(currentCountry.name);
  }

  addLog(`New country chosen. ${shownHints[0]}`);
  updateDisplay();
}

function computerGuess() {
  if (duelCompleted) return;
  computerThinkingEl.textContent = 'Computer is guessing...';
  setTimeout(() => {
    // Choose a random letter not guessed
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let available = alphabet.split('').filter(l => !humanGuessedLetters.has(l));
    if (available.length === 0) {
      computerThinkingEl.textContent = 'Computer has no more letters to guess.';
      return;
    }
    const guess = available[Math.floor(Math.random() * available.length)];
    humanGuessedLetters.add(guess);
    const { found, newMask } = revealLetterForMask(guess, humanCountry.name, humanMask);
    humanMask = newMask;
    if (found) {
      addLog(`Computer guessed letter '${guess.toUpperCase()}' and it was correct!`);
    } else {
      addLog(`Computer guessed letter '${guess.toUpperCase()}' and it was wrong.`);
    }
    if (!humanMask.includes('_')) {
      duelCompleted = true;
      addLog(`Computer wins! The country was ${humanCountry.name}.`);
      computerThinkingEl.textContent = 'Computer won!';
    } else {
      computerThinkingEl.textContent = 'Computer is thinking...';
    }
    updateDisplay();
  }, 1000);
}

function revealLetter(letter) {
  const updated = displayedMask.split('');
  let found = false;

  currentCountry.name.split('').forEach((char, index) => {
    if (normalize(char) === letter) {
      updated[index] = char;
      found = true;
    }
  });

  displayedMask = updated.join('');
  return found;
}

function revealLetterForMask(letter, countryName, mask) {
  const updated = mask.split('');
  let found = false;

  countryName.split('').forEach((char, index) => {
    if (normalize(char) === letter) {
      updated[index] = char;
      found = true;
    }
  });

  return { found, newMask: updated.join('') };
}

function processCorrectAnswer() {
  guessedCount += 1;
  completed = true;
  addLog(`Correct! The country was ${currentCountry.name}. Total countries guessed: ${guessedCount}.`);

  if (gameMode === 'classic') {
    if (guessedCount >= MAX_TARGETS) {
      endGame();
      return;
    }
  }

  addLog('Loading next country...');
  setTimeout(startCountry, 1000);
}

function handleLetterGuess() {
  if (completed) return;
  const raw = letterInput.value;
  const guess = normalize(raw);
  letterInput.value = '';

  if (!guess || guess.length !== 1 || !/[a-z]/.test(guess)) {
    addLog('Please enter a single letter.');
    return;
  }

  if (guessedLetters.has(guess)) {
    addLog(`You already guessed the letter '${guess.toUpperCase()}'.`);
    return;
  }

  guessedLetters.add(guess);
  totalTurns += 1;
  const found = revealLetter(guess);

  if (found) {
    addLog(`Good guess! Letter '${guess.toUpperCase()}' is in the country.`);
  } else {
    addLog(`Sorry, letter '${guess.toUpperCase()}' is not in the country.`);
  }

  showNextHint();

  if (!displayedMask.includes('_')) {
    processCorrectAnswer();
  }

  updateDisplay();
}

function handleDuelLetterGuess() {
  if (duelCompleted) return;
  const raw = duelLetterInput.value;
  const guess = normalize(raw);
  duelLetterInput.value = '';

  if (!guess || guess.length !== 1 || !/[a-z]/.test(guess)) {
    addLog('Please enter a single letter.');
    return;
  }

  if (computerGuessedLetters.has(guess)) {
    addLog(`You already guessed the letter '${guess.toUpperCase()}'.`);
    return;
  }

  computerGuessedLetters.add(guess);
  const { found, newMask } = revealLetterForMask(guess, computerCountry.name, computerMask);
  computerMask = newMask;

  if (found) {
    addLog(`Good guess! Letter '${guess.toUpperCase()}' is in the computer's country.`);
  } else {
    addLog(`Sorry, letter '${guess.toUpperCase()}' is not in the computer's country.`);
  }

  showNextDuelHints();

  if (!computerMask.includes('_')) {
    duelCompleted = true;
    addLog(`You win! The computer's country was ${computerCountry.name}.`);
  } else {
    computerGuess();
  }

  updateDisplay();
}

function handleDuelCountryGuess() {
  if (duelCompleted) return;
  const raw = duelCountryInput.value;
  const guess = normalize(raw);
  duelCountryInput.value = '';

  if (!guess) {
    addLog('Please type a country name to guess.');
    return;
  }

  const normalizedTarget = normalize(computerCountry.name);

  if (guess === normalizedTarget) {
    computerMask = computerCountry.name;
    duelCompleted = true;
    addLog(`You win! The computer's country was ${computerCountry.name}.`);
  } else {
    addLog(`Wrong country guess.`);
    showNextDuelHints();
    computerGuess();
  }

  updateDisplay();
}

function handleCountryGuess() {
  if (completed) return;
  const raw = countryInput.value;
  const guess = normalize(raw);
  countryInput.value = '';

  if (!guess) {
    addLog('Please type a country name to guess.');
    return;
  }

  totalTurns += 1;
  const normalizedTarget = normalize(currentCountry.name);

  if (guess === normalizedTarget) {
    displayedMask = currentCountry.name;
    processCorrectAnswer();
  } else {
    totalTurns += TURN_PENALTY;
    addLog(`Wrong country guess. +${TURN_PENALTY} turns penalty added.`);
    showNextHint();
  }

  updateDisplay();
}

function endGame() {
  completed = true;
  const finalMessage = gameMode === 'classic'
    ? `Congratulations! You finished ${MAX_TARGETS} countries in ${totalTurns} turns.`
    : 'Practice session ended. Restart to continue.';
  addLog(finalMessage);
  hintTextEl.textContent = finalMessage;
}

function resetGame() {
  totalTurns = 0;
  guessedCount = 0;
  guessedLetters.clear();
  usedCountryNames.clear();
  gameLog.innerHTML = '';
  hintTextEl.textContent = 'A hint will appear here.';
  addLog('Game reset. Starting a new round...');
  startCountry();
}

modeInputs.forEach((input) => {
  input.addEventListener('change', () => {
    gameMode = input.value;
    if (['easy', 'medium', 'hard'].includes(gameMode)) {
      duelMode = true;
      mainGame.style.display = 'none';
      duelPanel.style.display = 'none';
      countryPicker.style.display = 'block';
      gameLog.innerHTML = '';
      gameLogDuel.innerHTML = '';
    } else {
      duelMode = false;
      countryPicker.style.display = 'none';
      duelPanel.style.display = 'none';
      mainGame.style.display = 'block';
      resetGame();
    }
  });
});

guessLetterBtn.addEventListener('click', handleLetterGuess);
guessCountryBtn.addEventListener('click', handleCountryGuess);
newGameBtn.addEventListener('click', resetGame);
letterInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleLetterGuess();
  }
});
countryInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleCountryGuess();
  }
});
startDuelBtn.addEventListener('click', () => {
  countryPicker.style.display = 'none';
  duelPanel.style.display = 'block';
  startDuel();
});

duelGuessLetterBtn.addEventListener('click', handleDuelLetterGuess);
duelGuessCountryBtn.addEventListener('click', handleDuelCountryGuess);
duelLetterInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleDuelLetterGuess();
  }
});
duelCountryInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleDuelCountryGuess();
  }
});

resetGame();
