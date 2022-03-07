import React, { useState } from "react";
import { PokemonInfo } from "../../Interface/PokemonInterface";
import {
  AbliName,
  CloseButton,
  ImageModal,
  ModalBottom,
  ModalPokemon,
  ModalTop,
  ImageModalBack,
} from "../Modal/ModalStyled";
import { ImagePokemon, Pokemon, PokemonName } from "./PokeItemStyled";

interface Props {
  pokeData: PokemonInfo;
}

function PokemonItem({ pokeData }: Props) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [ablities, setAblities] = useState<string[]>([]);
  const [image, setImage] = useState<string>("");
  const [imageBack, setImageBack] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleClickPokemon = (data: any) => {
    const ablities = data.abilities.map((abli: any) => {
      return abli.ability.name;
    });
    setAblities(ablities);
    setImage(data.sprites.front_default);
    setName(data.name)
    setImageBack(data.sprites.back_default)
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <Pokemon onClick={() => handleClickPokemon(pokeData)}>
        <PokemonName>{pokeData.name}</PokemonName>
        <ImagePokemon src={pokeData.sprites.front_default} />
      </Pokemon>

      {showModal ? (
        <ModalPokemon>
          
          <ModalTop>
            <ImageModal src={image}/>
            <ImageModalBack src={imageBack}/>
            <PokemonName>{name}</PokemonName>
          </ModalTop>

          <ModalBottom>
            <AbliName>{ablities}</AbliName>
          </ModalBottom>
          <CloseButton onClick={handleCloseModal}>X</CloseButton>
        </ModalPokemon>
      ) : (
        ""
      )}
    </>
  );
}

export default PokemonItem;
