import { styled } from '@mui/material';

export const StyledImg = styled('img')(({ theme }) => ({
  padding: '5px',
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: '10px',
}));
