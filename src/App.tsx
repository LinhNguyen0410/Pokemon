import { log } from "console";
import React, { useEffect, useState } from "react";
import pokemonApi from "./Apis/pokemonApi";
import "./App.css";
import Header from "./Components/Header/Header";
import LoadMore from "./Components/LoadMore/LoadMore";
import PokemonList from "./Components/PokemonList/PokemonList";
import { PokemonInfo, PokemonType } from "./Interface/PokemonInterface";
import { Container } from "./StyledComponents/GlobalStyle";



function App() {

  // state
  const [pokemons, setPokemons] = useState<PokemonInfo[]>([]);
  const [limit,setLimit] = useState<number>(10)

  // call API
  useEffect(() => {
    (async () => {
      const response = await pokemonApi.getAll(limit);
      const dataPokemon = response.data.results;

      // get one pokemon
      dataPokemon.forEach(async (poke: PokemonType) => {
        const pokemon = await pokemonApi.getByName(poke.name);
        setPokemons((poke) => [...poke,pokemon.data]);
      });
    })();
  }, [limit]);

  //  event
    const handleLoadMore = (number:number) => {
      const calLimit = limit + number
      setLimit(calLimit)
    }

  return (
    <Container>
      <Header />
      <PokemonList data = {pokemons}/>
      <LoadMore onLoadMore = {handleLoadMore} />
    </Container>
  );
}

export default App;
