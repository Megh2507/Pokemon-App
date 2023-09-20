import React, { useEffect, useState } from "react";
import PokemonThumbnail from "./Components/PokemonThumbnail";

function App() {
  // Hooks
  const [allPokemons, setAllPokemons] = useState([]);
  const [pokeList, setPokeList] = useState([]);
  const [loadPoke, setLoadPoke] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");

  useEffect(() => {
    getPokemons();
    console.log("useEffect getPokemon");
  }, []);

  const fetchPokemonData = async (pokemon) => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
      const data = await res.json();
      // Update allPokemons with the new data while preserving the existing data
      setAllPokemons((prevPokemons) => [...prevPokemons, data]);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
  };

  const getPokemons = async () => {
    try {
      const res = await fetch(loadPoke);
      const data = await res.json();
      setPokeList(data.results);
      setLoadPoke(data.next);

      // Fetch data for each Pokémon in pokeList
      for (const pokemon of data.results) {
        await fetchPokemonData(pokemon);
      }
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
  };

  // Create empty array for map
  const pokemonMap = {};

  // Create a mapping of Pokémon names to their details
  allPokemons.forEach((pokemon) => {
    pokemonMap[pokemon.name] = pokemon;
  });

  // Extract unique Pokémon details from the mapping
  const uniquePokemons = Object.values(pokemonMap);

  return (
    <div className="app-container">
      <h1>Pokemon Kingdom</h1>

      <div className="pokemon-container">
       <div className="all-container">
      {uniquePokemons.map((pokemon, index) => (
          <PokemonThumbnail
          id = {pokemon.id}
          name = {pokemon.name}
          image = {pokemon.sprites.other.dream_world.front_default}
          type={pokemon.types[0].type.name}
          key={index}
          height = {pokemon.height}
          weight = {pokemon.weight}
          stat1 = {pokemon.stats[0].stat.name}
          stat2 = {pokemon.stats[1].stat.name}
          stat3 = {pokemon.stats[2].stat.name}
          stat4 = {pokemon.stats[3].stat.name}
          stat5 = {pokemon.stats[4].stat.name}
          stat6 = {pokemon.stats[5].stat.name}
          bs1 = {pokemon.stats[0].base_stat}
          bs2 = {pokemon.stats[1].base_stat}
          bs3 = {pokemon.stats[2].base_stat}
          bs4 = {pokemon.stats[3].base_stat}
          bs5 = {pokemon.stats[4].base_stat}
          bs6 = {pokemon.stats[5].base_stat}

          abil = {pokemon.abilities}
          mov = {pokemon.moves}

          sprite = {pokemon.sprites}
          
         />
        ))}
      </div>
      <button className="load-more" onClick={()=>getPokemons()}>More Pokemons</button>
      </div>
    </div>
  );
}

export default App;
