class House {
    constructor(houseName, sigil, words) {
        this.houseName = houseName;
        this.sigil = sigil;
        this.words = words;
        this.enemies = [];
    }

    houseInfo() {
        console.log(this.houseName);
        console.log(this.sigil);
        console.log(this.words);
    }

    newEnemy(name) {
        this.enemies.push(name);
    }

}

class Character {
    constructor(name) {
        this.name = name;
        this.status = 'alive;'
    }

    kill() {
        this.status = 'dead';
    }

    revive() {
        this.status = 'alive';
    }
}


// Create three houses
const targaryen = new House('House Targaryen', 
                            'A red three-headed dragon on a black field', 
                            ['Fire and blood']);


const lannister = new House('House Lannister', 
                            'A golden lion rampant on a crimson field', 
                            ['Hear Me Roar!', 'A Lannister Always Pays His', 'Debts'])


const stark = new House('House Stark', 
                        'A grey direwolf on a white field',
                        ['Winter Is Coming'])


// Create three characters
const daenerys = new Character('Daenerys Targaryen')
const cersei = new Character('Cersei Lannister')
const jonSnow = new Character('Jon Snow')

// Add jon snow to lannister house enemy list
lannister.newEnemy(jonSnow.name);

// Kill jon snow
jonSnow.kill();

targaryen.houseInfo();
stark.houseInfo();




