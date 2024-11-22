async function buscarPokemon() {
    
    let pokemonBuscado = document.getElementById("name").value.toLowerCase();

    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonBuscado}`;

    if (pokemonBuscado === "") {
        document.getElementById("datosApi").innerHTML = `<p style="color: red;">¡Ups! Parece que no escribiste nada.<br> <br> Por favor, escribe el nombre de un Pokémon para buscarlo</p>`;
        return;
    }

    try {
        let response = await fetch(url);
        if (!response.ok) throw new Error("No encontramos ese Pokémon. <br> <br> Verifica el nombre e inténtalo nuevamente.");

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
        document.getElementById("datosApi").innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}
