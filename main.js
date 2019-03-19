class House{
    constructor(houseName,sigil,words,enemies){
        this.houseName = houseName;
        this.sigil = sigil;
        this.words = words;
        this.enemies = [];
    }
    houseInfo(){
        console.log(`The house name is ${this.houseName}, their sigil is ${this.sigil} and their words are ${this.words}`); 
    }
    newEnemy(name){
        this.enemies.push(name)
    }
}

class Character extends House{
    constructor(name,status){
        super()
        this.name = name;
        this.status = status;
    }
    kill(){
        this.status = 'Dead';
    }
    revive(){
        this.status = 'Alive';
    }
} 


var houseTargaryen = new House('House Targaryen','A red three-headed dragon,on a black field.','Fire and Blood',['Eddard Stark','Jaime Lannister'])
var houseStark = new House('House Stark','A grey direwolf on a white field','Winter Is Coming',['Jaime Lannister'])
var houseLannister = new House('House Stark', 'A golden lion rampant on a crimson field','Hear Me Roar!',['Robert Baratheon'])


var daenerysTargaryen = new Character ('daenerysTargaryen','Alive');
var cerseiLannister = new Character('Cersei Lannister','Alive',);
var jonSnow = new Character('Jon Snow', 'Alive');

cerseiLannister.newEnemy('jonSnow');
jonSnow.kill();

console.log(jonSnow);
console.log(houseTargaryen);
console.log(houseStark);



















