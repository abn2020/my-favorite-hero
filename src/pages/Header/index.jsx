import logo from '../../assets/logo.png';
import DeadVolv from '../../assets/deadpoolXvolverine.jpg';

import { HeaderStyle, Logo, LogoImg, LogoMyTeam, TextMyTeam, ContainerHeros, CardHero, TitleTeam, LogoDeadVolv } from './styles';

const Header = ({ favorites }) => {

  console.log(favorites);

  return (
    <HeaderStyle>
      <Logo>
          <LogoImg src={logo} alt="Logo Marvel" />
          <LogoDeadVolv src={DeadVolv} alt="Deadpool x Wolverine" />        
      </Logo>
      <div style={{ marginTop: '24px' }}>
        <TitleTeam style={{ color: 'black' }}>My team</TitleTeam>
          <ContainerHeros>
            {favorites.map(item =>
              item.favorite === true ?
                <CardHero  key={item.id}>
                  <LogoMyTeam src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    alt="Imagem heroi" />
                  <TextMyTeam>{item.name}</TextMyTeam> 
                </CardHero>
                : null
            )}
          </ContainerHeros>
        </div>
    </HeaderStyle>
  )
}

export default Header