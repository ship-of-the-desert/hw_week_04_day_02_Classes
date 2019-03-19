/* Homework Week04 Day 02 */

// House Class
class House{
    constructor(name, sigil, words, _enemies=[]){
    this.name = name;
    this.sigil = sigil;
    this.words = words;
    this.enemies = [] = _enemies ;
    
}
houseInfo(){
    console.log(`The house name is ${this.name}. Sigil is ${this.sigil}. Words are ${this.words}.
    Enemies are ${this.enemies}`)

}
newEnemy(name){
    this.enemies.push(name)
}
}
// Character Class
class Character extends House{
    constructor(name, status){
        super();
        this.name = name;
        this.status = status;
    }
kill(){
    this.status = 'dead'
}
revive(){
 this.status = 'alive'
}
}



// ### Activity:

// - Create 3 different houses using the `House` class.
var Targaryen = new House('Targaryen',
 'a three-headed red dragon on a black background',
 'Fire and Blood', ['Eddard Stark','Jaime Lannister','Renly Baratheon','Robert Baratheon','Viserys Targaryen'] )

var Stark = new House('Stark', 'A grey direwolf on a white field', 'Winter Is Coming')

var Lannister = new House('Lannister' ,'A golden lion rampant on a crimson field', `Hear Me Roar!" (official)
 "A Lannister Always Pays His Debts" (common saying)`)

 // - Create 'Daenerys Targaryen', 'Cersei Lannister', and 'Jon Snow' using the `Character` class.
var Daenerys_Targaryen = new Character('Daenerys_Targaryen', 'alive')

var Cersei_Lannister = new Character('Cersei Lannister', 'alive')

var Jon_Snow = new Character('Jon Snow', 'alive')

// - Add 'Jon Snow' to Cersei Lannister's enemy list using the `newEnemy()` method.
Cersei_Lannister.newEnemy('Jon Snow')

// - Kill 'Jon Snow'.
Jon_Snow.kill()

// - Display the house info of 'Daenerys Targaryen'.
Daenerys_Targaryen.houseInfo()

// - Display the house info of 'House Stark'.
Stark.houseInfo()


