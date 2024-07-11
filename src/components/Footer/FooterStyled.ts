import { styled } from '@mui/material';

export const FooterStyled = styled('footer')(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  width: '100%',
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledImg = styled('img')(({ theme }) => ({
  width: '260px',
  margin: '20px',
}));