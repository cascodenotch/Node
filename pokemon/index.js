async function buscarPokemon() {
    
    let pokemonBuscado = document.getElementById("name").value;
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonBuscado}`;

    try {
        let response = await fetch(url);
        if (!response.ok) throw new Error("Pokémon no encontrado");

        let data = await response.json();
        
        let habilidadesHTML = "";
        data.abilities.forEach(ability => {
            habilidadesHTML += `<li>${ability.ability.name}</li>`;
        });

        document.getElementById("datosApi").innerHTML = 
        `<h2>${data.name}</h2>
        <img src="${data.sprites.front_default}">
        <h4>Habilidades</h4>
        <ul>${habilidadesHTML}</ul>
        `
        }

    catch (error) {
        document.getElementById("datosApi").innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}
