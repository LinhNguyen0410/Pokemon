import styled from "styled-components";

const pokemonBG = "#EEDFCC"

export const Pokemon = styled.div`
  width: 120px;
  height: 120px;
  background-color: ${pokemonBG};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
export const ImagePokemon = styled.img`
  width: 90px;
  object-fit: cover;
  cursor: pointer;
  transition: all .3s linear ;
  &:hover{
      transform: scale(1.1) ;
  }
`;
export const PokemonName = styled.span`
  text-transform: capitalize;
  font-size: 1.7rem;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;  
`;
