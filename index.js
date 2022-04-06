const contenedorPokemon = document.getElementById('contenedor_pokemon');


const mostrarPokemon = (id) => {

        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(data =>  {


            crearPokemon(data);

        })
        .catch(err => {console.log(err)});

}

const mostrarPokemones = number => {

    for (let i = 1; i <= number; i++) {
       
        mostrarPokemon(i)
        
    }

}

const crearPokemon = pokemon => {

    const card = document.createElement('div');
    card.classList.add('card');

    const sprite = document.createElement('img');
    sprite.classList.add('sprite');
    sprite.src = pokemon.sprites.front_default;


    const carBody = document.createElement('div');
    carBody.classList.add('card_body');

    const name = document.createElement('h5');
    name.classList.add('name');
    name.textContent = pokemon.name;


    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

    carBody.appendChild(name);
    carBody.appendChild(number);
    
    card.appendChild(sprite);
    card.appendChild(carBody);

  

    contenedorPokemon.appendChild(card);
    

}

mostrarPokemones(12);