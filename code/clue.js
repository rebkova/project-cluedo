// STEP 1 - CREATE OBJECTS FOR ALL THE SUSPECTS, SOMETHING LIKE THIS:

const mrGreen = {
  firstName: "Jacob",
  lastName: "Green",
  color: "#008000", //green
  description: "He has a lot of connections",
  age: 45,
  image: "assets/green.png",
  occupation: "Entrepreneur",
};
// console.log(`Description of Mr Green: ${mrGreen.description}.`);

const mrsWhite = {
  firstName: "Elisabeth",
  lastName: "Pale",
  color: "#f5deb3", //wheat
  description: "She loves watering plants and drinking tea",
  age: 67,
  image: "assets/white.png",
  occupation: "Retired firewoman"
};

const profPlum = {
  firstName: "Victor",
  lastName: "Plum",
  color: "#dda0dd", //plum
  description: "Easily intimidated but not by differential equations.",
  age: 42,
  image: "assets/plum.png",
  occupation: "Professor of engineering at LTH, Lund University."
};

const missScarlet = {
  firstName: "Cassandra",
  lastName: "Scarlet",
  color: "#ff4500", //orangered
  description: "She is a lady in red, easily remembered by her brown curly hair. Not a small talker",
  age: 34,
  image: "assets/scarlet.png",
  occupation: "Theoretical physicist"
};

const mrsPeacock = {
  firstName: "Eleanor",
  lastName: "Peacock",
  color: "#7924dc", //purpleblue
  description: "An elegant and misterious lady. Rarely speaks to anyone.",
  age: 54,
  image: "assets/peacock.png",
  occupation: "She runs her own construction company."
};

const colonelMustard = {
  firstName: "Jack",
  lastName: "Mustard",
  color: "#c2b11e", //mustard
  description: "Extremely outgoing and likable person. Laughs out loud.",
  age: 68,
  image: "assets/mustard.png",
  occupation: "Retired captain"
};


// CREATE OBJECTS FOR ALL THE WEAPONS, ADD MORE CHARACTERISTICS TO THE WEAPONS IF YOU LIKE.

const rope = {
  name: "rope",
  weight: 10,
};
//console.log(`Rope weight (unit unknown): ${rope.weight}`);

const knife = {
  name: "knife",
  weight: 6,
};
//console.log(`Item ${knife.name} with weight ${knife.weight}`);

const candlestick = {
  name: "candlestick",
  weight: 12,
};

const dumbbell = {
  name: "dumbbell",
  weight: 25,
};

const poison = {
  name: "poison",
  weight: 3,
};

const axe = {
  name: "axe",
  weight: 17,
};

const bat = {
  name: "bat",
  weight: 12,
};

const trophy = {
  name: "trophy",
  weight: 15,
};

const pistol = {
  name: "pistol",
  weight: 8,
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

// const mystery = {

// };

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects); //random array object will be saved into an object called mystery.killer


  // This will change the background color of the card to the one connected to the chosen killer
  document.getElementById("killerCard").style.background = mystery.killer.color;

   //and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById(
    "killerName"
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;

  //prints out the picked killer in the DOM
  document.getElementById("mystery").innerHTML = `The picked killer is ${mystery.killer.firstName} ${mystery.killer.lastName}.`;
};
//on click, the function will be invoked
document.getElementById("killerCard").onclick = pickKiller;


// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

const pickWeapon = () => {
  //pick the random weapon
  mystery.weapon = randomSelector(weapons);

  //display weapon on the card
  document.getElementById("weaponName").innerHTML = `${mystery.weapon.name}`;

  //prints out the picked weapon in the DOM
  document.getElementById("mystery").innerHTML = `The picked weapon is ${mystery.weapon.name}.`;
  
};
//on click, the function will be invoked
document.getElementById("weaponCard").onclick = pickWeapon;

const pickRoom = () => {
  //pick a random room from an array
  mystery.room = randomSelector(rooms);

  //display picked room on a card
  document.getElementById("roomName").innerHTML = `${mystery.room}`;

  //prints out the picked weapon in the DOM
  document.getElementById("mystery").innerHTML = `The picked room is ${mystery.room}.`;
};
//on click, the function will be invoked
document.getElementById("roomCard").onclick = pickRoom;




// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
