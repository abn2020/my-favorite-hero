import styled from 'styled-components';


export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(0,0,0, 0.7);
    z-index: 1000;
`;

export const ModalStyle = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 40%;
    transform: translate(-50%,-50%);
    padding: 24px;
    background-color: #fff;
    border-radius: 10px;
    color: black;
    @media(max-width:750px){
        width: 90%;
    }
`;

export const CloseContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonCloseModal = styled.button`
   padding: 10px 30px;
   font-size: 16px;
   border:1px solid black;
   background: transparent;
   cursor: pointer;
   border-radius: 8px;
   color: black;
   &:hover{
    background: black;
    color: #fff;
    }
`;

export const TitleModal = styled.h2`
   font-family: 'Marvel', sans-serif;
   font-size: 48px;
   color: black;
   margin:0;
`;