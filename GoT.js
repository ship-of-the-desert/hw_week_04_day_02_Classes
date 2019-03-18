// #1 House class
class House {
constructor(houseName,Sigil,Words,Enemies){
this.houseName = houseName;
this.Sigil = Sigil;
this.Words = Words;
this.Enemies = Enemies;
}
// displays the name, sigil and words of the house.
houseInfo(){
console.log(this.houseName + this.Sigil + this.Words );

}
// adds a new enemy to the house.
newEnemy(name){
this.Enemies.push(name);

console.log(this.Enemies);
}
}

// #2 Character class
//character class that extends from house class
class Character extends House {

    constructor (Name,Status , houseName, Enemies){
        super ( houseName,enemies)
        this.name = name;
        this,Status = Status;
    }
    kill(){
        this.Status="dead";
    }
    revive(){
        this.Status="alive";
    }
}

// -1- different houses using the `House` class.
let houseA = new House ("Targaryen" , 
"A red three-headed dragon on a black field", 
"Fire and Blood", ["Janos Slynt" , "Roose Bolton"]); // i dont know if they are enemies of Targaryen house or not :p

let houseB = new House ("Lannister",
"A golden lion rampant on a crimson field",
"Hear Me Roar!" ,
["jansoo" , "Rosee"]);

let houseC = new House ("Tully",
"A silver trout leaping on a red and blue background.",
"Family, Duty, Honor",
["janso1","Rose1"]);

let houseD = new House ("Stark",
"A grey direwolf on a white field",
"Winter Is Coming",
["janso2" , "Rose2"]);


//Character name and status
let JonSnow = new Character ("Jon Snow", "Alive");
let Daenerys = new Character("Daenerys Targaryen","Alive");
let Cersei = new Character("Cersei Lannister","Alive");

// Add Jon Snow to Cersei's enemy list
houseB.newEnemy("jon Snow");

//Kill 'Jon Snow'
JonSnow.kill();

//Display the house info of 'Daenerys Targaryen'
houseA.houseInfo();

// Display the house info of 'House Stark'
houseD.houseInfo();
