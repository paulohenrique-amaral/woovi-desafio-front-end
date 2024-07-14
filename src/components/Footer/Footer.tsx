import footerImg from '../../assets/footerImg.svg';
import { FooterStyled, StyledImg } from './FooterStyled';

function Footer() {
  return (
    <FooterStyled>
      <StyledImg
        src={ footerImg }
        alt="security-logo-woovi-footer"
      />
    </FooterStyled>
  );
}

export default Footer;
