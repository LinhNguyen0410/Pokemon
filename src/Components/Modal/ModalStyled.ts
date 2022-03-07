import styled from "styled-components";

export const ModalPokemon = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background-color: #f5f5f5;
  border-radius: 30px;
  overflow: hidden;
  border: 5px solid #eedfcc;
  box-shadow: 1px 2px 1px #ccc;
`;
export const ModalTop = styled.div`
  width: 100%;
  height: 120px;
  background-image: linear-gradient(#eedfcc, #cc9966);
  border-bottom: 2px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageModalBack = styled.img`
  width: 120px;
  object-fit: cover;
  display: none;

`;  

export const ImageModal = styled.img`
  width: 120px;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    display: none;

  }
  &:hover ~ ${ImageModalBack} {
    display: block;
  }
`;

export const ModalBottom = styled.div`
  width: 100%;
  height: 180px;
  background-color: #eedfcc;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const AbliName = styled.span`
  font-size: 3rem;
  width: 80% ;
`;
export const CloseButton = styled.span`
  font-size: 2rem;
  font-weight: bold;
  position: absolute;
  top: 4px;
  right: 10px;
  cursor: pointer;
  &:active {
    opacity: 0.6;
  }
`;
