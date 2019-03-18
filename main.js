// console.log('hello');

// Noble Houses

class House{
    constructor(name, sigil, words, enemies){
        this.name = name;
        this.sigil = sigil;
        this.words = words;
        this.enemies = [];
    }
    houseInfo(){
        // this.name = 'House Targaryen';
        console.log(this.name); 
    }

    newEnemy(name){
        this.enemies.push('Jon Snow')
        console.log(this.enemies);
    }
}

const houseOne = new House('House Targaryen');
houseOne.houseInfo();
houseOne.newEnemy();


// Notable Characters

class Characters{
    constructor(name, status){
        this.name = name;
        this.status = status;
    }
    kill(){
        if (this.status == alive){
            console.log(`${this.name} is not alive`); 
        } 
        // else{
        //     console.log(`${this.name} is dead`)
        // }

    }
    revive(){
        if (this.status == dead){
            console.log(`${this.name} is still alive`); 
        } 
        // else{
        //     console.log(`${this.name} is alive`)
        // }
    }
}
let alive = 0;
let dead = 1;
const characterOne = new Characters('Daenerys Targaryen', alive);
// characterOne.kill();
// characterOne.revive();


const characterTwo = new Characters('Cersei Lannister', dead);
// characterTwo.kill();
// characterTwo.revive();

const characterThree = new Characters('Jon Snow', alive);
characterThree.kill();
characterThree.revive();