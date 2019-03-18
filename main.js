class House{
   constructor(houseName, sigil, words , enemies){
           this.houseName=houseName;
           this.sigil=sigil;
           this.words=words;
           this.enemies=enemies;
        }
        houseInfo(){
             
             console.log(`house Name: ${this.houseName} the sigil is ${this.sigil} and the words is ${this.words} the names of enemies are ${this.enemies} `);
            }
        newEnemy(name){
            this.enemies.push(name);
        }
}
var house1 = new House("Targaryen", "A red three-headed dragon on a black field","Fire and Blood",['jon snow', 'sansa stark','arya stark','cersei']);
var house2 = new House("stark", "A grey direwolf on a white field","Winter Is Coming",['roose bolton', 'robb stark','torhen stark','edard']);
var house3 = new House("Lannister", "A golden lion rampant on a crimson field","A Lannister Always Pays His Debts",['baratheon', 'lancel lannister','tywin','reginald']);






class Characters{
    constructor(name, status){
        this.name=name;
        this.status=status;
     }

     kill(){
         if (this.status=='live'){
             this.status="dead";
             console.log(`the ${this.name} is ${this.status}`)
         }
     }
     revive(){
        if (this.status=='dead'){
            this.status="live";
            console.log(`the ${this.name} is ${this.status}`)
        }
    }

}

var char1 = new Characters("jon snow", "live");
var char1 = new Characters("cersei", "live");
var char1 = new Characters("Daenerys Targaryen", "live");





house3.newEnemy("jon Snow");
char1.kill();

house2.houseInfo();


