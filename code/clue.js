// OBJECTS FOR ALL THE SUSPECTS
const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "#008000", //green
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur",
  favouriteWeapon: "poisoN",
};

const mrsWhite = {
  firstName: "Elisabeth",
  lastName: "Pale",
  color: "#F5DEB3", //wheat
  description: "She loves watering plants and drinking tea",
  age: 67,
  image: "assets/white.png",
  occupation: "Retired firewoman",
  favouriteWeapon: "ropE",
};

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "#dda0dd", //plum
  description: "Easily intimidated but not by differential equations.",
  age: 42,
  image: "assets/plum.png",
  occupation: "Professor of engineering",
  favouriteWeapon: "baT",
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "#ff4500", //orangered
  description:
    "She is a lady in red, easily remembered by her brown curly hair. Not a small talker",
  age: 34,
  image: "assets/scarlet.png",
  occupation: "Theoretical physicist",
  favouriteWeapon: "candlesticK",
};

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "#7924dc", //purpleblue
  description: "An elegant and mysterious lady. Rarely speaks to anyone.",
  age: 54,
  image: "assets/peacock.png",
  occupation: "CEO of a construction company",
  favouriteWeapon: "axE",
};

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "#c2b11e", //mustard
  description: "Extremely outgoing and likable person. Laughs out loud.",
  age: 68,
  image: "assets/mustard.png",
  occupation: "Retired captain",
  favouriteWeapon: "dumbbelL",
};

//OBJECTS FOR ALL THE WEAPONS
const rope = {
  name: "a rope",
  weight: 10,
  id: "ropE",
};

const knife = {
  name: "a knife",
  weight: 6,
  id: "knifE",
};

const candlestick = {
  name: "a candlestick",
  weight: 12,
  id: "candlesticK",
};

const dumbbell = {
  name: "a dumbbell",
  weight: 25,
  id: "dumbbelL",
};

const poison = {
  name: "a poison",
  weight: 3,
  id: "poisoN",
};

const axe = {
  name: "an axe",
  weight: 17,
  id: "axE",
};

const bat = {
  name: "a bat",
  weight: 12,
  id: "baT",
};

const trophy = {
  name: "a trophy",
  weight: 15,
  id: "trophY",
};

const pistol = {
  name: "a pistol",
  weight: 8,
  id: "pistoL",
};

// THE ROOMS ONLY HAVE A NAME SO NO NEED FOR OBJECTS

//SUSPECTS, WEAPONS AND ROOMS GROUPED IN ARRAYS
//array of objects
const suspects = [
  mrGreen,
  mrsWhite,
  profPlum,
  missScarlet,
  mrsPeacock,
  colonelMustard,
];

//array of strings
const suspectsArray = [
  "Mr Green",
  "Professor Plum",
  "Miss Scarlet",
  "Mrs Peacock",
  "Colonel Mustard",
  "Mrs White",
];

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
  pistol,
];

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
  "Pistol",
];

//array of strings
const favouriteWeapon = [
  "ropE",
  "axE",
  "poisoN",
  "baT",
  "candlesticK",
  "dumbbelL",
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
  "Patio",
];

// function randomly selects one item from the array you pass in to the function
const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

//an object that keeps the mystery
const mysteryObject = {
  killer: null,
  weapon: null,
  room: null,
};

//function invoked when you click on the killer card
const pickKiller = () => {
  //randomly select a killer from the suspects + add that to the mystery object.
  mysteryObject.killer = randomSelector(suspects); //random array object will be saved into an object called mystery.killer

  //change the background color of the card to the one connected to the chosen killer
  document.getElementById("killerCard").style.background =
    mysteryObject.killer.color;

  //show the full name + other info of the killer
  document.getElementById(
    "killerName"
  ).innerHTML = `${mysteryObject.killer.firstName} ${mysteryObject.killer.lastName}`;
  document.getElementById(
    "killerAge"
  ).innerHTML = `${mysteryObject.killer.age} years`;
  document.getElementById("killerImage").src = `${mysteryObject.killer.image}`;
  document.getElementById("killerOccupation").innerHTML =
    mysteryObject.killer.occupation;
};
//on click call the function
document.getElementById("killerCard").onclick = pickKiller;

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way

const pickWeapon = () => {
  //pick the random weapon
  mysteryObject.weapon = randomSelector(weapons);

  //display weapon on the card
  document.getElementById(
    "weaponName"
  ).innerHTML = `${mysteryObject.weapon.name}`;
  document.getElementById(
    "weaponWeight"
  ).innerHTML = `Weight: ${mysteryObject.weapon.weight}`;
};
//on click call the function
document.getElementById("weaponCard").onclick = pickWeapon;

const pickRoom = () => {
  //pick a random room from an array
  mysteryObject.room = randomSelector(rooms);

  //display picked room on a card
  document.getElementById("roomName").innerHTML = `${mysteryObject.room}`;
};
//on click, the function will be invoked
document.getElementById("roomCard").onclick = pickRoom;

let favouriteWeaponObject = {
  weapon: null,
};

const shuffleFavouriteWeapon = () => {
  favouriteWeaponObject.weapon = randomSelector(favouriteWeapon); //random fav weapon will be saved into favouriteWeaponObject

  document.getElementById(
    "favouriteWeapon"
  ).innerHTML = `Favourite weapon: ${favouriteWeaponObject.weapon}`;
};
//on click, the function will be invoked
document.getElementById("shuffleButton").onclick = shuffleFavouriteWeapon;

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button.
const revealMystery = () => {
  document.getElementById("mystery").innerHTML = `The murder was commited 
  by ${mysteryObject.killer.firstName} ${mysteryObject.killer.lastName}, in the ${mysteryObject.room} with ${mysteryObject.weapon.name}.`;
};
//on click, the function will be invoked
document.getElementById("revealButton").onclick = revealMystery;
