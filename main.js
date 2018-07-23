
//Defining variables to push information into modals


let showName = document.getElementById('displayName')
let showImg = document.getElementById('displayImage')
let showAbilities = document.getElementById('displayAbilities')
let showHP = document.getElementById('displayHP')
let showAtk = document.getElementById('displayAtk')
let showDef = document.getElementById('displayDef')

class Pokemon {
    constructor(name, hp, attack, defense, abilities, picUrl) {
        this.name = name
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
        this.picUrl = picUrl
    }
};

class Trainer {
    constructor(name) {
        this.name = name;
        this.listOfPokemon = {};
    }
    all() {
        return Object.values(this.listOfPokemon);
    };

    get(nameOfPoke) {
        return (this.listOfPokemon[nameOfPoke])

    }
    add(pokemonObject) {
        this.listOfPokemon[pokemonObject.name] = pokemonObject
    }
};

class Gym {
    constructor() {
        this.listOfTrainers = {};
    }
    all() {
        return Object.values(this.listOfTrainers);
    };

    get(nameOfTrainer) {
        return (this.listOfTrainers[nameOfTrainer])

    }
    add(trainerObject) {
        this.listOfTrainers[trainerObject.name] = trainerObject
    }
};

let ben = new Trainer("ben"); 

let imani = new Trainer("imani");

let lillian = new Trainer("lillian");

let ourGym = new Gym("ourGym")

// link = "https://pokeapi-nycda.firebaseio.com/pokemon/39.json"

function changePoke(link, trainer, gym) {
    axios.get(link).then((response) => {
        let allData = response.data;
        let statistics = allData.stats;

        // name 
        let pokeName = allData.name;
        // hp level
        let aychPee = statistics[5].base_stat;
        // attack level
        let pokeAttack = statistics[4].base_stat;
        // defense level
        let pokeDefense = statistics[3].base_stat;
        // pic of the Pokemon
        let pic = allData.sprites.front_default;

        // abilities - array of strings
        let arrayOfSkills = [];
        let skills = allData.abilities;
        skills.forEach((element) => {
            arrayOfSkills.push(element.ability.name)
        })

        let pokemon = new Pokemon(pokeName, aychPee, pokeAttack, pokeDefense, arrayOfSkills, pic);

        trainer.add(pokemon);

        ourGym.add(trainer)
        
    })
}

function changeLink(name) {
    let nameOfPokemon = name;
    link = "https://pokeapi.co/api/v2/pokemon/" + nameOfPokemon; 
}

// LILLIAN!!!!  

// first call for lillian
changeLink("lapras");
changePoke(link, lillian, ourGym);

// second call for lillian
changeLink("latias");
changePoke(link, lillian, ourGym);


// third call for lillian
changeLink("lucario");
changePoke(link, lillian, ourGym);

//BENN!!!

// first call for Ben
changeLink("jigglypuff");
changePoke(link, ben, ourGym);

// second call for Ben
changeLink("charizard");
changePoke(link, ben, ourGym);


changeLink("pikachu");
changePoke(link, ben, ourGym);

// IMANI TIME!!!!

// first call for Imani
changeLink("golbat");
changePoke(link, imani, ourGym);

// second call for Imani
changeLink("gastly");
changePoke(link, imani, ourGym);


// third call for Imani
changeLink("haunter");
changePoke(link, imani, ourGym);

let trainerName = "";

i = 0

function setTrainer(name) {
    trainerName = name
    console.log(trainerName)
    i=0
};

function changeInfo(){

    let lowerCaseName = ourGym.listOfTrainers[trainerName].all()[i].name;
    let firstLetterCapital = lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1);
    showName.innerText = firstLetterCapital;

    showImg.src = ourGym.listOfTrainers[trainerName].all()[i].picUrl;
    showHP.innerText = "HP: " + ourGym.listOfTrainers[trainerName].all()[i].hp;
    showAtk.innerText = "Attack: " + ourGym.listOfTrainers[trainerName].all()[i].attack;
    showDef.innerText = "Defense: " + ourGym.listOfTrainers[trainerName].all()[i].defense;

    showAbilities.innerText=(ourGym.listOfTrainers[trainerName].all()[i].abilities.join(", "));
};

function timeOut() {

    setTimeout(changeInfo, 200)
}

function slidePrev(){
    i--;
    if (i==-1) {
        i=2
    } 
    changeInfo();
};

function slideNext(){
    i++;
    if (i>2) {
        i=0
    } 
    changeInfo();
};

//Audio JS
function play() {
    let audio = document.getElementById("easterEggAudio");
    audio.volume = 0.1;
    audio.play();
}