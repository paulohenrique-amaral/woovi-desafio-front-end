import { useContext } from 'react';
import Context from '../../context/Context';
import { Container, Grid, Box, Typography, styled, keyframes } from '@mui/material';

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
      <Typography style={ { fontWeight: 'bold' } }>
        {paymentStepsValue.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
        </Typography>
        <Typography style={ { fontWeight: 'bold' } }>
        {paymentStepsValue.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
        </Typography>
    </Box>
  );
}

export default PaymentStepperValue;