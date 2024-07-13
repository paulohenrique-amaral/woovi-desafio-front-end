import { Box } from '@mui/material';
import { DivStyled } from './FlagPromoStyled';

type FlagPromoProps = {
  children: React.ReactNode;
};

function FlagPromo({ children }: FlagPromoProps) {
  return (
    <Box sx={ { width: '100%', padding: '2px 5px' } }>
      <DivStyled>
        {children}
      </DivStyled>
    </Box>
  );
}

export default FlagPromo;
