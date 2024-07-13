import { styled } from '@mui/material';

export const DivStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'baseline',
  padding: '7px 0 7px 10px',
  gap: '5px',
  width: '99%',
  boxSizing: 'content-box',
  position: 'relative',
  background: theme.palette.secondary.main,
  borderRadius: '8px 0 0 8px',
  color: theme.palette.secondary.contrastText,
  fontSize: '10px',
  clipPath: 'polygon(100% 0%, 95% 49%, 100% 100%, 0 100%, 0% 50%, 0 0)',
}));
