
class House{
constructor(houseName, sigil, words,enemies){
  this.houseName = houseName;
  this.sigil = sigil;
  this.words = words;
  this.enemies = enemies;
}
houseInfo()//that displays the name, sigil and words of the house.
{
console.log(this.houseName);
console.log(this.sigil);
console.log(this.words);

} 
newEnemy(name)//that adds a new enemy to the house.
{
    this.enemies.push(name);
    console.log(this.enemies);
} 
}

class Characters extends House{
constructor(name,status,houseName, sigil, words,enemies){
    super(houseName, sigil, words,enemies)
    this.name=name;
    this.status=status;
}
kill(){
    this.status="dead";
}
revive(){
    this.status="alive";
}
}

var Targaryen = new House ("Targaryen","A red three-headed dragon on a black field.","Fire and Blood", ["Lannister","Bolton"])
var  Lannister = new House ("Lannister","A golden lion rampant on a crimson field","A Lannister Always Pays His Debts",["Sahar","Fahad"])
var Stark = new House ("Stark","A grey direwolf on a white field","Winter Is Coming",["Ali","Turki"])

var Daenerys = new Characters ("Daenerys","Alive","Targaryen","A red three-headed dragon on a black field.","Fire and Blood",["Lannister","Bolton"])
var Cersei = new Characters ("Cersei","Alive","Lannister","A golden lion rampant on a crimson field","A Lannister Always Pays His Debts",["Sahar","Fahad"])
var Arya = new Characters ("Arya","dead","Stark","A grey direwolf on a white field","Winter Is Coming",["Ali","Turki"])

Targaryen.houseInfo()
Cersei.newEnemy(Arya.name)
//Cersei.newEnemy(Arya)

Arya.status
Arya.revive()
Arya.status

Cersei.status
Cersei.kill()
Cersei.status

Daenerys.houseInfo()
Stark.houseInfo()