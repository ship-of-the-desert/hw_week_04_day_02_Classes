//Create a House class with 2 methods
class House{
    constructor(houseName, sigil, words, enemies){
        this.houseName=houseName
        this.sigil=sigil
        this.words=words
        this.enemies=enemy
    }
        houseInfo(){
        console.log(houseName, sigil, words, enemies)
        }
            newEnemy(name){
                this.enemies.push(name) 
                console.log(enemy)
            }

}

//Create a character class that extends from house class with 2 methods

class Character extends House{
    constructor(houseName,enemies, name, status){
        super(houseName,enemies)
            this.name = name;
            this.status = status;
    } 
        kill(){
        var statusKill = this.status("Dead");
        console.log(statusKill);
        }
            revive(){
                var statusRevive = this.status("Alive");
                console.log(statusRevive);
            }
}

//Enemies
var enemy = ["Septa Unella", "Pyat Pree", "Jaime Lannister"];

// Different houses 
let houseLannister = new House("House Lannister",
"A golden lion rampant on a crimson field",
"Hear Me Roar!",enemy);

let houseTargaryen = new House("House Targaryen",
"A red three-headed dragon, on a black field.",
"Fire and Blood",enemy);

let houseStark = new House("House Stark",
"A grey direwolf on a white field",
"Winter Is Coming",enemy);


// Character name and status
let Daenerys = new Character("Daenerys Targaryen","Alive");
let Cersei = new Character("Cersei Lannister","Alive");
let Jon = new Character("Jon Snow","Alive");

//Add 'Jon Snow' to Cersei's enemy list
houseLannister.enemies.newEnemy("Jon Snow");

//Kill 'Jon Snow'
Jon.kill();

//Display house information of Daenerys Targaryen
houseTargaryen.houseInfo();

//Display house information of House Stark
houseStark.houseInfo();