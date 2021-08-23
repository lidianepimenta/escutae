import { Container, Content } from "./stlyes";
import logoFooterImg from '../../assets/logoFooter.svg'

export function Footer() {
  return (
    <Container>
      <Content>
        <img 
          src={logoFooterImg} 
          alt="Escutaê" 
          className="logo" 
        />
        <p className="copyright">©2021 Escutaê</p>
        <p className="copyright">Todos os direitos reservados.</p>
      </Content>
    </Container>
  );  
}