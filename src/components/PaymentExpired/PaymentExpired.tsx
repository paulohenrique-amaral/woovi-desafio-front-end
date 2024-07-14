import { Typography } from '@mui/material';
import { getDateExpired } from '../../help/helper';
import theme from '../../themes/default';

function PaymentExpired() {
  const prazoLimite = getDateExpired();
  return (
    <>
      <Typography style={ { color: theme.palette.text.secondary } }>
        Prazo de pagamento:
      </Typography>
      <Typography style={ { fontWeight: 'bold' } }>
        {prazoLimite}
      </Typography>
    </>
  );
}

export default PaymentExpired;
