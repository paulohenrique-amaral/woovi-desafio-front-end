import { useContext } from 'react';
import Context from '../../context/Context';
import { Container, Grid, Box, Typography } from '@mui/material';

function PaymentCheckoutMsg() {
  const { paymentStage, checkout } = useContext(Context);
  const istallmentPriceConverted = checkout?.installmentPrice?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  const msgCheckoutStage1 = `${checkout?.client}, como você quer pagar?`;
  const msgCheckoutStage2 = `${checkout?.client}, pague a entrada de R$ ${istallmentPriceConverted} pelo Pix`;
  const msgCheckoutStage3 = `${checkout?.client}, pague o restante em ${checkout?.installmentNumber}x no cartão `;

  return (
    <Grid
      item
      xs={ 12 }
      sx={ {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px 0',

      } }
    >
      <Typography
      variant="h6"
      style={{
        fontWeight: 'bold',
        marginBottom: '15px',
        textAlign: 'center',
        maxWidth: '60%',
        wordWrap: 'break-word'
      }}
    >
      {paymentStage === 1 ? msgCheckoutStage1 : paymentStage === 2 ? msgCheckoutStage2 : msgCheckoutStage3}
    </Typography>
    </Grid>
  );
}

export default PaymentCheckoutMsg;