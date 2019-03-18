class House{
    constructor(name,sigil,words,enemies){
this.name = name;
this.sigil = sigil;
this.words = words;
this.enemies = enemies;
    }
    houseInfo(){
      console.log(this.name + " "+ this.enemies)
    }
    newEnemy(name){
this.enemies.push(name);
console.log(this.enemies);
    }
}
let house1 =  new House("Targaryen", "A red three-headed dragon, on a black field.","Fire and Blood",["sarah","jhone"]);
let house2 =  new House("Lannister", "A grey dire-wolf on a white field","Winter Is Coming",["sarah2","jhone2"]);
let house3 =  new House("Stark", "A red three-headed dragon, on a black field.","Fire and Blood",["sarah3","jhone3"]);

house1.houseInfo();
house2.newEnemy("Marc");

 class Character extends House{
     constructor(name,sigil,words,enemies,nameCharacter,status){
        super(name,sigil,words,enemies);
         this.nameCharacter = nameCharacter;
         this.status = status;
     }
     kill(){
this.status = "dead";
console.log(this.status)
console.log()
     }
     revive(){
this.status ="Alive";
console.log(this.status)
     }

 }
 let cha1 = new Character("Targaryen", "A red three-headed dragon, on a black field.","Fire and Blood",["sarah","jhone"],"Jon Snow","Alive");
 let cha2 = new Character("Lannister", "A grey dire-wolf on a white field","Winter Is Coming",["sarah2","jhone2"],"Cersei Lannister","Alive");
 let cha3 = new Character("Stark", "A red three-headed dragon, on a black field.","Fire and Blood",["sarah3","jhone3"],"Daenerys Targaryen","Alive");
 cha1.kill();