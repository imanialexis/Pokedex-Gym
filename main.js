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
        // console.log(this.listOfPokemon);
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
        // console.log(this.listOfPokemon);
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

let nameOfPokemon = "jigglypuff";

link = "https://pokeapi.co/api/v2/pokemon/" + nameOfPokemon;

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

// first call for Ben
changePoke(link, ben, ourGym);



nameOfPokemon = "charizard"
link = "https://pokeapi.co/api/v2/pokemon/" + nameOfPokemon;
// second call for Ben
changePoke(link, ben, ourGym);


nameOfPokemon = "pikachu"
link = "https://pokeapi.co/api/v2/pokemon/" + nameOfPokemon;


changePoke(link, ben, ourGym);

// IMANI TIME!!!!

nameOfPokemon = "golbat"

link = "https://pokeapi.co/api/v2/pokemon/" + nameOfPokemon;
// first call for Imani
changePoke(link, imani, ourGym);

nameOfPokemon = "gastly"
link = "https://pokeapi.co/api/v2/pokemon/" + nameOfPokemon;
// second call for Imani
changePoke(link, imani, ourGym);

nameOfPokemon = "haunter"
link = "https://pokeapi.co/api/v2/pokemon/" + nameOfPokemon;
// third call for Imani
changePoke(link, imani, ourGym);

// LILLIAN!!!!  

nameOfPokemon = "lapras"

link = "https://pokeapi.co/api/v2/pokemon/" + nameOfPokemon;
// first call for lillian
changePoke(link, lillian, ourGym);

nameOfPokemon = "latias"
link = "https://pokeapi.co/api/v2/pokemon/" + nameOfPokemon;
// second call for lillian
changePoke(link, lillian, ourGym);

nameOfPokemon = "lucario"
link = "https://pokeapi.co/api/v2/pokemon/" + nameOfPokemon;
// third call for lillian
changePoke(link, lillian, ourGym);

