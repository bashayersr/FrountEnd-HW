const charlists = [
  {
    name: "arkan Yusuf",
    height: 120,
    mass: 50,
    gender: "male",
    eye_color: "black",
  },
  {
    name: "ali",
    height: 130,
    mass: 120,
    gender: "male",
    eye_color: "blue",
  },
  {
    name: "samira",
    height: 70,
    mass: 60,
    gender: "female",
    eye_color: "brown",
  },
];
//Map /////////////////////////
let map_arry_name_height = charlists.map((item) => ({
  name: item.name,
  height: item.height,
}));
console.log(map_arry_name_height);

let map_arry_fisrt_name = charlists.map(
  (item) => item.name.toString().split(" ")[0]
);
console.log(map_arry_fisrt_name);

//Reduce /////////////////////////
const totalMass = charlists.reduce((total, itm) => total + itm.mass, 0);
console.log(totalMass);

const totalNameCharacters = charlists.reduce(
  (total, itm) => total + itm.name.length,
  0
);
console.log(totalNameCharacters);

//Filter /////////////////////////
const greater100Characters = charlists.filter((items) => {
  return items.mass > 100;
});
console.log(greater100Characters);

const femaleCharacters = charlists.filter((items) => items.gender === "female");
console.log(femaleCharacters);

//Sort /////////////////////////
const sortedName = charlists.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});
console.log(sortedName);

const sortedGender = charlists.sort((a, b) => {
  if (a.gender === "female") return -1;
  return 1;
});
console.log(sortedGender);

//Every /////////////////////////

const allBlueEyes = charlists.every(
  (character) => character.eye_color === "blue"
);
console.log(allBlueEyes);

const allmale = charlists.every((character) => character.gender === "male");

console.log(allmale);

//Some /////////////////////////
const someMale = charlists.some((character) => character.gender === "male");
console.log(someMale);

const allMassMoreThan50 = charlists.some((character) => character.mass > 50);
console.log(allMassMoreThan50);

//
