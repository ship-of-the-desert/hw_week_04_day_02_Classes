class House {
    constructor(name, sigil, words, enemies) {
        this.name= name;
        this.sigil= sigil;
        this.words= words;
        this.enemies= enemies;
    }

    houseInfo() {
        console.log(`name: ${this.name}, sigil: ${this.sigil}, words: ${this.words}`);
    }

    newEnemy(name) {
        this.enemies.push(name)
    }
}

var targaryen= new House('House Targaryen', 'A red three-headed dragon on a black field', "Fire and Blood", ['Khuzam']);
var lannister= new House('House Lannister', 'A golden lion rampant on a crimson field', "Hear Me Roar!", ['Khuzam']);
var stark= new House('House Stark', 'A grey direwolf on a white field', "Winter Is Coming", []);

class Character{
    constructor(name, status) {
        this.name= name;
        this.status= status;
        this.house= new House();
    }

    kill() {
        this.status= 'dead';
    }

    revive() {
        this.status= 'alive';
    }
}

var daenerys= new Character('Daenerys Targaryen', 'alive');
var cersei= new Character('Cersei Lannister', 'alive');
var jon= new Character('Jon Snow', 'alive');

cersei.house= lannister;
cersei.house.newEnemy(jon.name);
jon.kill();
console.log(lannister.enemies);
targaryen.houseInfo();
stark.houseInfo();