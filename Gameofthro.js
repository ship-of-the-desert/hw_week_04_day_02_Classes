class House {
    constructor ( housename ,sigil ,words  ) 
    {

    this.housename = housename ;
    this.sigil = sigil ;
    this.words = words ;
    this.enemies = [] ;

    }

    houseInfo(){
        console.log(`${this.housename}, and the sigil is  ${this.sigil} the words is ${this.words}`) ; 
    }

    newEnemy(name){
        this.enemies.push(name)
    }

}

var houseTargyan = new House ("houseTargyan" , "A red three-headed dragon on a black field" , "Fire and Blood") ;
var HouseLannister = new House ("HouseLannister" , "A golden lion rampant on a crimson field" ,"Hear Me Roar!") ;
var HouseBolton = new House (" HouseBolton" ,"A red flayed man, hanging upside-down on a white X-shaped cross, on a black background" ,"Our Blades Are Sharp") ;


class Character extends House{ 
    constructor(name,status){
        super () ;
        this.name = name ;
        this.status = status ;
    }

    kill(){
        this.status = "dead";
    }

    revive(){
        this.status = "alive";
    }
    houseInfo() {
    super.houseInfo() ;
    }
} 
var daenerystargaryen = new Character ("daenerystargaryen","alive");
var cerseilannister = new Character("Cerseilannister","alive",);
var jonsnow = new Character("Jon snow", "alive");


jonsnow.kill() ;
daenerystargaryen.houseInfo();
HouseBolton.houseInfo(); // because iam not select house stark ..

