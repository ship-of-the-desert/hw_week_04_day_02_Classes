console.log("JS linked")
//Noble Houses
class House {
  constructor(houseName, sigil, words) {
    this.houseName = houseName;
    this.sigil = sigil;
    this.words = words;
    this.enemies=[];
  }
  houseInfo() {
    //that displays the name, sigil and words of the house.
    console.log(`House Name: ${this.houseName}
     Sigil: ${this.sigil}
     Words: ${this.words}`
    );
  }
  newEnemy(name) {
    //that adds a new enemy to the house.
   this.enemies.push(name);
  }
}

//Notable Characters
class Character extends House {
  constructor(houseName,sigil,words,name) {
    super(houseName,sigil,words);
    this.name = name;
    this.status;
  }
  kill() {
    //that changes that status of the character into dead.
    this.status = "dead";
  }
  revive() {
    //that changes that status of the character into alive.
    this.status = "alive";
  }
}

//Create 3 different houses using the House class.
let house1 = new House(
  "House Targaryen",
  "A red three-headed dragon",
  "Fire and Blood"
);
let house2 = new House(
  "House Lannister",
  "A golden lion rampant on a crimson ",
  "Hear Me Roar! "
);
let house3 = new House(
  "House Stark",
  "A grey direwolf on a white field",
  "Winter Is Coming"
);
//Create 'Daenerys Targaryen', 'Cersei Lannister', and 'Jon Snow' using the Character class.
let char1 = new Character("Daenerys Targaryen"); //belong to house1
let char2 = new Character("Cersei Lannister"); //belong to house2
let char3 = new Character("Jon Snow");//belong to house3

//Add 'Jon Snow' to Cersei Lannister's enemy list using the newEnemy() method.
char2.newEnemy(char3.name);
//console.log(char2.enemies);

//Kill 'Jon Snow'.
char3.kill();
//console.log(char3.status);

//Display the house info of 'Daenerys Targaryen'.
char1.houseInfo("House Targaryen","A red three-headed dragon","Fire and Blood","Daenerys Targaryen");//??

//Display the house info of 'House Stark'.
house3.houseInfo();