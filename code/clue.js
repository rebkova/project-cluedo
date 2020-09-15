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
console.log(`Description of Mr Green: ${mrGreen.description}.`);

const mrsWhite = {
  firstName: "Elisabeth",
  lastName: "Pale",
  color: "#fff", //white
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
console.log(`Rope weight (unit unknown): ${rope.weight}`);

// THE ROOMS ONLY HAVE A NAME SO NO NEED FOR OBJECTS THERE.

// NOW GROUP ALL SUSPECTS, WEAPONS AND ROOMS IN ARRAYS LIKE THIS:
const suspects = [
mrGreen,
mrsWhite,
profPlum,
missScarlet,
mrsPeacock,
colonelMustard - Jack Mustard,
];
//can they be duplicated?

const weapons = [
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

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
// YOU DON'T NEED TO CHANGE THIS, JUST TRY TO UNDERSTAND IT. AND HOW TO USE IT.
const randomSelector = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// CREATE AN OBJECT THAT KEEPS THE MYSTERY.
// With a killer, a weapon and a room.
// The values will be set later.

// This function will be invoked when you click on the killer card.
const pickKiller = () => {
  // This will randomly select a killer from the suspects. And add that to the mystery object.
  mystery.killer = randomSelector(suspects);

  // This will change the background color of the card to the one connected to the chosen killer
  //and show the full name of the killer. Feel free to add more things to show about the killer.
  document.getElementById("killerCard").style.background = mystery.killer.color;
  document.getElementById(
    "killerName"
  ).innerHTML = `${mystery.killer.firstName} ${mystery.killer.lastName}`;
};

// CREATE FUNCTIONS pickWeapon and pickRoom in a similar way.

// STEP 4 - CREATE A FUNCTION revealMystery that will be invoked when you click that button. It should show something like:
// 'The murder was committed by Jacob Green, in the living room with a rope.'
