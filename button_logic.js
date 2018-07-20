let counter = -1;

rightButton.addEventListener('click', (event) => {
   
    counter++
    if (counter > pokemonCounter.length -1) {
//***see below where pokemon counter comes from***//
//         axios.get("https://pokeapi-nycda.firebaseio.com/pokemon/42.json").then((response) => {
//     let data = response.data;
//     let name = data.name;
//     let hp = data.stats[5].base_stat;
//     let attack = data.stats[4].base_stat;
//     let defense = data.stats[3].base_stat;
//     let abilities = data.abilities.map((element) => element.ability.name);
//     let image = data.sprites.front_default;


//     golbat = new Pokemon(name, hp, attack, defense, abilities, image)
//     *pokemonCounter.push(golbat)*

//     lordFinesse.add(golbat)
//     console.log(lordFinesse)

// })

        counter = 0;
    }
    name.innerText = `${pokemonCounter[counter].name}`;
    hp.innerText = `HP : ${pokemonCounter[counter].hp}`;
    attack.innerText = `Attack : ${pokemonCounter[counter].attack}`;
    defense.innerText = `Defense : ${pokemonCounter[counter].defense}`;
    abilities.innerText =  `Ability : ${pokemonCounter[counter].abilities[0]}`;
    pictureFrame.innerHTML = `<img src =${pokemonCounter[counter].image}>`;
    

})

leftButton.addEventListener('click', (event) => {
    counter--
    if (counter < 0) {
       counter = pokemonCounter.length -1
    }
    name.innerText = pokemonCounter[counter].name;
    hp.innerText = `HP : ${pokemonCounter[counter].hp}`;
    attack.innerText = `Attack : ${pokemonCounter[counter].attack}`;
    defense.innerText = `Defense : ${pokemonCounter[counter].defense}`;
    abilities.innerText =  `Ability : ${pokemonCounter[counter].abilities[0]}`;
    pictureFrame.innerHTML = `<img src =${pokemonCounter[counter].image}>`;

})