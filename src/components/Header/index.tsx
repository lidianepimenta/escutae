import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'


export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Escutaê" className="logo" />
        <input type="text" placeholder="Pesquise por álbum, artista ou título musical" className="search" />
        <div className="menu">
          <ul className="grid">
            <li><a href="#home" className="title">Início</a></li>
            <li><a href="#favoriteTracks" className="title">Músicas favoritas</a></li>
          </ul>
        </div>
      </Content>
    </Container>
  );
}
