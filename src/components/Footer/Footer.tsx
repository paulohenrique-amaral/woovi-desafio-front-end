import { Box, Typography, styled, ButtonBase, Grid } from '@mui/material';

const FooterStyled = styled('footer')(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  width: '100%',
  backgroundColor: theme.palette.secondary.main,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'baseline',
}));

function Footer() {
  return (
    <FooterStyled>
      <p>Footer</p>
    </FooterStyled>
  );
}

export default Footer;