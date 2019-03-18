class house {
    constructor(name, sigil, words) {
        this.name = name;
        this.sigil = sigil;
        this.words = words;
        this.enemies = []
    }
   
    // Method that displays the name, sigil and words of the house
    houseInfo() {
        console.log(`House of: ${this.name}
        House sigil: ${this.sigil}
        House words: ${this.words}
        House enemies: ${this.enemies.length == 0 ? 'None' : this.Enemies}\n`)
    }
    
    // Method that adds a new enemy to the house
    newEnemy(name) {
        this.enemies.push(name)
    }
}

class character {
    constructor(name, status) {
        this.name = name;
        this.status = status;
    }

    // Method that changes that status of the character into dead
    kill() {
        this.status = "dead";
    }
    //  Method that changes that status of the character into alive
    revive() {
        this.status = "alive";
    }

}
var houses = {
    starkHouse: new house("House Stark", "A grey direwolf on a white field", ["Winter Is Coming"]),
    targaryenHouse: new house("House Targaryen", "A red three-headed dragon, on a black field.", ["Fire and Blood"]),
    lannisterHouse: new house("House Lannister", "A golden lion rampant on a crimson field", ["Hear Me Roar!", "A Lannister Always Pays His Debts", "Fire and Blood"])
}


var daenerys = new character('Daenerys Targaryen', 'alive')
var cersei = new character('Cersei Lannister', 'alive')
var jon = new character('Jon Snow', 'alive')

houses.newEnemy.lannisterHouse('Jon Snow');
jon.kill();
houses.targaryenHouse.houseInfo();
houses.starkHouse.houseInfo();
