
class House {
    constructor(houseName,sigil,words,enemies){
        this.houseName= houseName;
        this.sigil = sigil;
        this.words = words;
        this.enemies = enemies;
    }

    houseInfo(){
console.log(`this is the housename ${this.houseName} and the sigil is ${this.sigil}
 their words is ${this.words} and the enemies are ${this.enemies} `)
        
       

    }
    
    newEnemy(name){
this.enemies.push(name);

    
    
    }
}

var firstHouse = new House("Targaryen", "A red three-headed dragon on a black field","Fire and Blood",['jon snow', 'sansa stark','arya stark','cersei']);
var secondHouse = new House("stark", "A grey direwolf on a white field","Winter Is Coming",['roose bolton', 'robb stark','torhen stark','edard']);
let thirdHouse = new House("Lannister", "A golden lion rampant on a crimson field","A Lannister Always Pays His Debts",['baratheon', 'lancel lannister','tywin','reginald']);

// charcter changes 
class Charecter {

    constructor(name, status){

        this.name= name;
        this.status = status;
    }

    kill(){
        if (this.status == "a live"){
            this.status = "dead" }
            console.log(`he is ${this.name} and he is ${this.status} kill him`)
    }

    revive(){
       if(this.status == "dead") {
           this.status = "live"}
           console.log(`he is ${this.name} and he is ${this.status} `);

    }
}
var firstChar = new Charecter("meshals", "dead");
var secondChar = new Charecter("memo", "dead");
var thirdChar = new Charecter("Badir", "live");

thirdHouse.newEnemy("jon Snow");
firstChar.kill();

secondHouse.houseInfo();