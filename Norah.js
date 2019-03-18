class House {
    constructor(name, Sigil, Words) {
        this.name = name
        this.Sigil = Sigil
        this.Words = Words
        this.Enemies = []


    }
    // that adds a new enemy to the house.
    newEnemy(name) {
        this.Enemies.push(name)
    }
    //that displays the name, sigil and words of the house.
    houseInfo() {
        console.log(`Name of the House: ${this.name}
        Sigil: ${this.Sigil}
        Words: ${this.Words}
        Enemies: ${this.Enemies.length == 0 ? 'None' : this.Enemies}\n`)
    }
}
class Character {
    constructor(Name, Status) {
        this.Name = Name
        this.Status = Status
    }

    // that changes that status of the character into dead.
    kill() {
        this.Status = "dead"
    }
    //  that changes that status of the character into alive.
    revive() {
        this.Status = "alive"
    }

}
var houses = {
    House_Stark: new House("House Stark", "A grey direwolf on a white field", ["Winter Is Coming"]),
    House_Targaryen: new House("House Targaryen", "A red three-headed dragon, on a black field.", ["Fire and Blood"]),
    House_Lannister: new House("House Lannister", "A golden lion rampant on a crimson field", ["Hear Me Roar!", "A Lannister Always Pays His Debts", "Fire and Blood"])// enemy:all out of the house 
}


var Daenerys = new Character('Daenerys Targaryen', 'alive')
var Cersei = new Character('Cersei Lannister', 'alive')
var Jon = new Character('Jon Snow', 'alive')


Jon.kill()
houses.House_Lannister.newEnemy('Jon Snow')
houses.House_Targaryen.houseInfo()
houses.House_Stark.houseInfo()
houses.House_Lannister.houseInfo()