class House {
    constructor(houseName, sigil, words, enemies){
        this.houseName = houseName
        this.sigil = sigil
        this.words = words
        this.enemies = enemies
    }
    houseInfo(){
        console.log(`${this.houseName}'s sigil is a ${this.sigil}, their motto is ${this.words}. they are at war with ${this.enemies}`)
    }
    newEnemy(name){
        this.enemies.push(name)
    }

    
}
class Char extends House{
    constructor(name, status,houseName, sigil, words, enemies){
        super(houseName, sigil, words, enemies)
        this.name =  name
        this.status = status
    }
    CharInfo(){
        console.log(`${this.name} is ${this.status}. They belongs to house ${this.houseName}. their house's sigil is a ${this.sigil}, their motto is ${this.words}. they are at war with ${this.enemies}`)
    }
    kill(){
        this.status = "dead"
    }
    revive(){
        this.status = "alive"
    }
}

let jon =  new Char("Jon Snow", "semi dead","targaryan", "dragon", "fire and fury", ["lannister", "bolton","Barateon"])
let cersei = new Char ("Cersei lannister", "alive", "lannister", "golden lion", "A lannister always pays his debt", ['martell', 'tyrell', 'Stark','targaryan'])
let Daenerys = new Char ("Daenerys targaryan", "alive", "Targaryan", "Dragon", "Dragons ARE OP", ['martell', 'tyrell','lannister'])


let targaryan = new House("targaryan", "dragon", "fire and fury", ["lannister", "martell","Tyrell"])
let Stark = new House("Stark", "Dire Wolf", "winter is cominng", ["lannister", "bolton","Barateon"])
let lannister = new House("lannister", "golden lion", "A lannister always pays his debt", ['martell', 'tyrell', 'Stark','targaryan'])


jon.kill()

targaryan.houseInfo()
Stark.houseInfo()
lannister.houseInfo()


jon.CharInfo()
cersei.CharInfo()
Daenerys.CharInfo()

jon.houseInfo()

jon.newEnemy("Cerci")

console.log(jon)

console.log(targaryan.enemies)




































