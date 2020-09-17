// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "#008000", //green
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur",
  favouriteWeapon: "poisoN"
};
// console.log(`Description of Mr Green: ${mrGreen.description}.`);

const mrsWhite = {
  firstName: "Elisabeth",
  lastName: "Pale",
  color: "#F5DEB3", //wheat
  description: "She loves watering plants and drinking tea",
  age: 67,
  image: "assets/white.png",
  occupation: "Retired firewoman",
  favouriteWeapon: "ropE"
};

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "#dda0dd", //plum
  description: "Easily intimidated but not by differential equations.",
  age: 42,
  image: "assets/plum.png",
  occupation: "Professor of engineering",
  favouriteWeapon: "baT"
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "#ff4500", //orangered
  description: "She is a lady in red, easily remembered by her brown curly hair. Not a small talker",
  age: 34,
  image: "assets/scarlet.png",
  occupation: "Theoretical physicist",
  favouriteWeapon: "candlesticK"
};

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "#7924dc", //purpleblue
  description: "An elegant and mysterious lady. Rarely speaks to anyone.",
  age: 54,
  image: "assets/peacock.png",
  occupation: "CEO of a construction company",
  favouriteWeapon: "axE"
};

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "#c2b11e", //mustard
  description: "Extremely outgoing and likable person. Laughs out loud.",
  age: 68,
  image: "assets/mustard.png",
  occupation: "Retired captain",
  favouriteWeapon: "dumbbelL"
};


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: "a rope",
  weight: 10,
  id: "ropE"
};
//console.log(`Rope weight (unit unknown): ${rope.weight}`);

const knife = {
  name: "a knife",
  weight: 6,
  id: "knifE"
};
//console.log(`Item ${knife.name} with weight ${knife.weight}`);

const candlestick = {
  name: "a candlestick",
  weight: 12,
  id: "candlesticK"
};

const dumbbell = {
  name: "a dumbbell",
  weight: 25,
  id: "dumbbelL"
};

const poison = {
  name: "a poison",
  weight: 3,
  id: "poisoN"
};

const axe = {
  name: "an axe",
  weight: 17,
  id: "axE"
};

const bat = {
  name: "a bat",
  weight: 12,
  id: "baT"
};

const trophy = {
  name: "a trophy",
  weight: 15,
  id: "trophY"
};

const pistol = {
  name: "a pistol",
  weight: 8,
  id: "pistoL"
};

// THE ROOMS ONLY HAVE A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:
//array of objects
const suspects = [
mrGreen,
mrsWhite,
profPlum,
missScarlet,
mrsPeacock,
colonelMustard
];
// console.log(`Array of suspects as objects: ${suspects}.`); //object object 
//console.dir(`Array printed out with dir: ${suspects}`); //object object

//array of strings
const suspectsArray = [
"Mr Green",
"Professor Plum",
"Miss Scarlet", 
"Mrs Peacock",
"Colonel Mustard",
"Mrs White"
];
// console.log(`Array of suspects as strings: ${suspectsArray}`);
// console.log(`Third suspect in the array: ${suspectsArray[2]}.`);
//console.log(`Last suspect in the array: ${suspectsArray[suspectsArray.length-1]}.`);

//array of objects
const weapons = [
rope,
knife,
candlestick,
dumbbell,
poison,
axe,
bat,
trophy,
pistol
];
// console.log(`Array of weapons as objects: ${weapons}.`);

//array of strings
const weaponsArray = [
"Rope",
"Knife",
"Candlestick",
"Dumbbell",
"Poison",
"Axe",
"Bat",
"Trophy",
"Pistol"
];
// console.log(`Array of weapons as strings: ${weaponsArray}.`);
// console.log(`Last weapon in the array: ${weaponsArray[weaponsArray.length -1]}`)

//array of strings
const favouriteWeapon = [
  "ropE",
  "axE",
  "poisoN",
  "baT",
  "candlesticK",
  "dumbbelL"
];

//array of strings
const rooms = [
"Dining Room", 
"Conservatory", 
"Kitchen", 
"Study", 
"Library", 
"Billiard Room", 
"Lounge", 
"Ballroom", 
"Hall", 
"Spa", 
"Living Room", 
"Observatory", 
"Theater", 
"Guest House", 
"Patio"
];
// console.log(`Array of rooms: ${rooms}.`);
// console.log(`Last room in the array: ${rooms[rooms.length-1]}.`);

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};


// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

let mysteryObject = {
  killer: null,
  weapon: null,
  room: null
};

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mysteryObject.killer = randomSelector(suspects); //random array object will be saved into an object called mysteryObject.killer


  // This will change the background color of the card to the one connected to the chosen killer
  document.getElementById("killerCard").style.background = mysteryObject.killer.color;

  //and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById("killerName").innerHTML = `${mysteryObject.killer.firstName} ${mysteryObject.killer.lastName}`;
  document.getElementById("killerAge").innerHTML = `${mysteryObject.killer.age} years`;
  document.getElementById("killerImage").src = `${mysteryObject.killer.image}`;
  document.getElementById("killerOccupation").innerHTML = `${mysteryObject.killer.occupation}`;
  document.getElementById("killerDescription").innerHTML = `${mysteryObject.killer.description}`;
  // document.getElementById("favouriteWeapon").innerHTML = `Favourite weapon: ${mysteryObject.killer.favouriteWeapon}`;


  //prints out the picked killer in the DOM
  //document.getElementById("mystery").innerHTML = `The picked killer is ${mystery.killer.firstName} ${mystery.killer.lastName}.`;
};
//on click, the function will be invoked
document.getElementById("killerCard").onclick = pickKiller;


// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {
  //pick the random weapon
  mysteryObject.weapon = randomSelector(weapons);

  //display weapon on the card
  document.getElementById("weaponName").innerHTML = `${mysteryObject.weapon.name}`;

  //prints out the picked weapon in the DOM
  //document.getElementById("mystery").innerHTML = `The picked weapon is ${mysteryObject.weapon.name}.`;
  
};
//on click, the function will be invoked
document.getElementById("weaponCard").onclick = pickWeapon;

const pickRoom = () => {
  //pick a random room from an array
  mysteryObject.room = randomSelector(rooms);

  //display picked room on a card
  document.getElementById("roomName").innerHTML = `${mysteryObject.room}`;

  //prints out the picked weapon in the DOM
  //document.getElementById("mystery").innerHTML = `The picked room is ${mystery.room}.`;
};
//on click, the function will be invoked
document.getElementById("roomCard").onclick = pickRoom;

let favouriteWeaponObject = {
  weapon: null,
};

const shuffleFavouriteWeapon = () => {
  favouriteWeaponObject.weapon = randomSelector(favouriteWeapon); //random fav weapon will be saved into favouriteWeaponObject

  document.getElementById("favouriteWeapon").innerHTML = `Favourite weapon: ${favouriteWeaponObject.weapon}`;
};
document.getElementById("shuffleButton").onclick = shuffleFavouriteWeapon;


// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
const revealMystery = () => {
  document.getElementById("mystery").innerHTML = `The murder was commited 
  by ${mysteryObject.killer.firstName} ${mysteryObject.killer.lastName}, in the ${mysteryObject.room} with ${mysteryObject.weapon.name}.`;
};
//on click, the function will be invoked 
document.getElementById("revealButton").onclick = revealMystery;