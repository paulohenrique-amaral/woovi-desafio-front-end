import { Box, Typography, styled, ButtonBase, Grid } from '@mui/material';

type FlagPromoProps = {
  children: React.ReactNode;
};

const DivStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'baseline',
  padding: '3px 0 3px 3px',
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

function FlagPromo({ children }: FlagPromoProps) {
  return (
    <Box sx={ {width: '100%', padding: '2px 5px'} }>
      <DivStyled>
        {children}
      </DivStyled>
    </Box>
  );
}

export default FlagPromo;