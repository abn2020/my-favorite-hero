import styled from 'styled-components';

export const HeaderStyle = styled.header`
  background: #fff;
  padding: 30px;
  display: flex;
  position: relative;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media(max-width:675px){
    justify-content: center;
  }

  @media(max-width:400px){
    padding:0px;
  }
`;

export const Logo = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 24px;
`;

export const LogoImg = styled.img`
    width: 300px;
    height: 100px;

    @media(max-width:400px){
      width:200px;
      height: 80px;
    }
    
`;

export const LogoDeadVolv = styled.img`
    height: 100px;
    @media(max-width:400px){
      height:80px;
    }
`;

export const LogoMyTeam = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

export const TextMyTeam = styled.div`
   font-size: 18px;
   font-family: 'Marvel', sans-serif;
   color: #000;
   margin-top: 24px;
`;

export const ContainerHeros = styled.div`
  display: flex;
  justify-content: center;
  align-items: self-start;
  column-gap: 24px;
  flex-wrap: wrap;
`;

export const CardHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100px;
  flex-wrap: wrap;
`;

export const TitleTeam = styled.div`
  text-align: center;
  font-size: 24px;
  font-family: sans-serif;
  color: #000;
  margin: 0 0 24px 0;
`;