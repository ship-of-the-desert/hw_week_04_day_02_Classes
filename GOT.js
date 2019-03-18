// Create 3 different houses using the House class.

class Houses {
    constructor(housesName, Sigil, Words) {
        this.housesName = housesName;
        this.Sigil = Sigil;
        this.Words = Words;
        this.ArrayOfEnemies = [];



    }
    houseInfo() {

        console.log(`house Name :${this.housesName} ,Sigil :${this.Sigil} ,and the Word: ${this.Words}`)
    }
    newEnemy(name) {

        this.ArrayOfEnemies.push(name);
    }
    Affiliation() {


    }



}





var Targaryen = new Houses("Targaryen", "A red three-headed dragonon a black field", "Fire and Blood")
var Stark = new Houses("Stark", "A grey direwolf on a white field", "Winter Is Coming")
var Lannister = new Houses("Lannister", "A golden lion rampant on a crimson field", "Hear Me Roar!")



// Create 'Daenerys Targaryen', 'Cersei Lannister', and 'Jon Snow' using the Character class.

class Character extends Houses {
    constructor(Name, Status) {
        super()
        this.Name = Name;
        this.Status = Status;
        // this.Sigil = Sigil;
        // this.Words = Words;

    }
    kill(Name) {
        if (this.Status == "alive") {
            return this.Status = "dead";
        }
    }
    revive() {
        if (this.Status == "dead") {
            return this.Status = "alive";
        }

    }
    belonging() {


    }

}
var Jon = new Character("Jon Snow", "alive");
var Cersei = new Character("Cersei I Lannister", "alive")
var Daenerys = new Character("Daenerys Targaryen", "alive");
// انا ما اعرف هل هـذي الطريقه الصحيحه لتحديث الاوبجت او لا ف اذا في طريقه احسن ي ريت تخبريني 
Cersei = Object.assign(Cersei, Lannister)
Jon = Object.assign(Jon, Stark)
Daenerys = Object.assign(Daenerys, Targaryen)

// Add 'Jon Snow' to Cersei Lannister's enemy list using the newEnemy() method.

Cersei.newEnemy("Jon Snow")

// Kill 'Jon Snow'.

Jon.kill()

// Display the house info of 'Daenerys Targaryen'.

Daenerys.houseInfo()

// Display the house info of 'House Stark'.

Stark.houseInfo()