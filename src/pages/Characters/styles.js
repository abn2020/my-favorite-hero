import styled from 'styled-components';

export const Main = styled.main`
    width: 100%;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 24px;
`;

export const CardHero = styled.div`
    width: 350px;
    padding: 0 15px;
    margin-bottom: 30px;
    transition: all .2s ease;

    @media (max-width: 400px){
        width: 300px;
    }
`;

export const CardHeroItens = styled.div`
    background: #fff;
    border-radius: 20px;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    transition: all .2s ease;
    column-gap: 24px;
`;

export const ImgHero = styled.img`
    width: 160px;
    height: 160px;
    border-radius: 8px;
`;

export const LoadingStyle = styled.img`
  position: relative;
  width: 80px;
  height: 80px;
  -webkit-animation:spin 2s linear infinite;
  -moz-animation:spin 2s linear infinite;
  animation:spin 2s linear infinite;
`;

export const TextCard = styled.div`
    font-size: 24px;
    color: #000;
    font-family: 'Marvel', sans-serif;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: flex-start;
    align-items: flex-start;
    -webkit-flex: 1 1;
    flex: 1 1;
    padding-right: 20px;

    @media (max-width: 400px){
        font-size: 16px;
    }
`;

export const ContainerSelect = styled.div`
    margin:0 11% 24px 11%;
    display: flex;
    align-items: center;
    column-gap: 8px;
    justify-content: space-between;
    flex-wrap: wrap;

    @media(max-width: 440px){
        justify-content: center;
        row-gap: 20px;
    }
`;

export const ContainerInput = styled.div`
    margin: 24px;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
`;

export const TextField = styled.input`
    height: 42px;
    background: rgb(255, 255, 255);
    border-radius: 8px;
    border: 1px solid #fff;
    width: 350px;
    color: black;
    font-size: 18px;
    height: 42px;

    @media (max-width: 400px){
        width: 300px;
    }
`;

export const Label = styled.label`
    font-size: 16px;
`;

export const ButtonModal = styled.button `
    display: flex;
    align-items: center;
    column-gap: 4px;
    padding: 4px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
`;

export const Title = styled.h2`
   font-family: sans-serif;
   font-size: 24px;
   color: black;
   font-weight: 550;
   margin:0;
`;

export const ButtonFavoriteHero = styled.button`
    padding: 2px 10px;
    background: transparent;
    border-radius: 8px;
    cursor: pointer;

    ${({ favorite }) => favorite && `
        border: 1px solid red;
        color: red;
    `}

    ${({ favorite }) => !favorite && `
        border: 1px solid green;
        color: green;
    `}

    @media(max-width: 350px){
        padding: 2px 2px;
    }
`;

export const ContainerPagination =  styled.div`
    display: flex;
    column-gap: 8px;
    flex-direction: row;
    flex-wrap: nowrap;
`;

export const ButtonPagination =  styled.button`
    background-color: transparent;
    padding: 10px 12px;
    border-radius: 8px;
    cursor: pointer;

    &:hover{
        background-color: gray;
    }
`;