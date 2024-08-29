

const pokemonInput = document.getElementById('pokemonInput');
const pokeIndex = document.getElementById('pokeDexNum');
const imagePoke = document.getElementById('pokeImg');

// Função para puxar os dados do pokemon pela API e alterar os dados dinamicamente no HTML.
async function getPokemon(){


    let pokemonName = pokemonInput.value.toLowerCase();

    let request = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    try {

    if (!request.ok) {
        imagePoke.style.display = "flex";
        imagePoke.src = "";
        imagePoke.alt = "Pokemon Not Found!";
        pokeIndex.textContent = '';
        pokeIndex.style.display = 'none';
        throw new Error("Couldn't fetch resource!");
    } else {
        let data = await request.json();
        console.log(data);
        
        imagePoke.src = `${data.sprites.front_default}`;
        imagePoke.style.width = "52%";
        imagePoke.style.display = "flex";
        
        pokeIndex.textContent = `${pokemonName[0].toUpperCase() + pokemonName.slice(1)}'s Pokedex number: ${data.id}`;
        pokeIndex.style.display = 'flex';

    }

    
    }
    catch(error) {
        console.error(error);
    }

    
}
