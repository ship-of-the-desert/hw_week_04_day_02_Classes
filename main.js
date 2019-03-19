class NobleHouses{
    constructor(){
        this.houseName=['House Baratheon','House Bolton','House Florent','House Lannister','House Martell','House Redwyne','House Stark','House Umber','House Targaryen','House Tully']
        this.sigil=['A crowned black stag rampant on a gold field','A red flayed man, hanging upside-down on a white X-shaped cross, on a black background','A red gold fox on ermine','A golden lion rampant on a crimson field',
        'A red sun pierced by a gold spear, on an orange field Formerly just a gold spear on an orange field','A burgundy grape cluster on a white field.','A grey direwolf on a white field','Four silver chains linked by a central ring on dark red',
        'A red three-headed dragon, on a black field.','A silver trout leaping on a red and blue background.']
        this.words=["Ours is the Fury",'Our Blades Are Sharp',"putting a fox on your banners doesn't impart a fox's wiles","Hear Me Roar!","Unbowed, Unbent, Unbroken",'Ripe for Victory',"Winter Is Coming","We're farther north than any of you","Fire and Blood","Family, Duty, Honor"]
        this.enemies={}
    }
    houseInfo(houseNameOrIndex){
        if (isNaN(houseNameOrIndex)){
            let index=this.houseName.indexOf(houseNameOrIndex)
            console.log('House Name:'+this.houseName[index],'House Sigil:'+this.sigil[index],'House Words:'+this.words[index])
        } else {
            console.log('House Name:'+this.houseName[houseNameOrIndex],'House Sigil:'+this.sigil[houseNameOrIndex],'House Words:'+this.words[houseNameOrIndex])
        }
    }
    newEnemy(enemy,house){
        this.enemies[house]=enemy
    }
}

class Character{
    constructor(){
        this.name=[]
        this.status={}
    }
    kill(name,stat){
        this.status[name]=stat
    }
    revive(name,stat){
        this.status[name]=stat
    }
}

var house=new NobleHouses();
var char=new Character();

// Actions
char.name.push('Daenerys Targaryen', 'Cersei Lannister', 'Jon Snow')
house.newEnemy('Jon Snow','Cersei Lannister')
char.kill('Jon Snow','Dead')
char.revive('Jon Snow','Revived')
house.houseInfo('House Targaryen')
house.houseInfo('House Stark')