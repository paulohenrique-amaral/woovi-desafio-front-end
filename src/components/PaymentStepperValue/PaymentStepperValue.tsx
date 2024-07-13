import { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import Context from '../../context/Context';

function PaymentStepperValue() {
  const { checkout } = useContext(Context);

  const paymentStepsValue = checkout?.installmentPrice || 0;

  return (
    <Box
      sx={ {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      } }
    >
      {[...Array(2)].map((_, index) => (
        <Typography key={ index } style={ { fontWeight: 'bold' } }>
          {paymentStepsValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </Typography>
      ))}
    </Box>
  );
}

export default PaymentStepperValue;
