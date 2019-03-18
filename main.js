// ## Noble Houses

class House{
    constructor(houseName , sigil , words){
        this.houseName = houseName;
        this.sigil = sigil;
        this.words = words ;
        this.enemies = [];

    }
    // Method houseInfo() that displays the name, sigil and words of the house.
houseInfo(){
    console.log(`The house name ${this.houseName} Sigil ${this.sigil} and Words of The House ${this.words} `);

}
// Method newEnemy(name) that adds a new enemy to the house.
newEnemy(name){
    this.enemies.push(name);
}
}


// ## Notable Characters
class Character {
    constructor(name, status ){
        this.name = name;
        this.status = status;
    }

// Method `kill()` that changes that status of the character into dead.
    kill(){
        this.status = 'Dead';
        console.log(this.status)
    }

 // Method `revive()` that changes that status of the character into alive.
   
    revive (){
        this.status = 'Alive';
        console.log(this.status)
    }


}
// Create 3 different houses using the `House` class.

var targaryenHouse = new House('House Targaryen','A red three-headed dragon on a black field', 'Fire and Blood')
var lannisterHouse = new House('House Lannister','A golden lion rampant on a crimson field','A Lannister Always Pays His Debts')
var starkHouse = new House('House Stark ','A grey direwolf on a white field','Winter Is Coming')

// Create 'Daenerys Targaryen', 'Cersei Lannister', and 'Jon Snow' using the `Character` class.

var daenerysTargaryen = new Character ('Daenerys Targaryen', 'Alive')
var cerseiLannister = new Character('Cersei Lannister', 'Alive')
var jonSnow = new Character('Jon Snow','Alive')

// Add 'Jon Snow' to Cersei Lannister's enemy list 

cerseiLannister.newEnemy(jonSnow) // I am not sure if it is true 

// kill jon snow by calling kill method to change a status to dead
jonSnow.kill()

//display house info 
daenerysTargaryen.houseInfo()
starkHouse.houseInfo()

