import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './PokeListStyled';
import PokemonItem from '../PokemonItem/PokemonItem';
import { PokemonInfo } from '../../Interface/PokemonInterface';


interface Props {
    data : PokemonInfo[],
}

function PokemonList({data}:Props) {
    return (
        <Wrapper>
            {data.map((poke, index) => (
                <PokemonItem key={index} pokeData = {poke}/>
            ))}
        </Wrapper>
    );
}

export default PokemonList;