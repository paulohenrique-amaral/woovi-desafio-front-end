import { useContext } from 'react';
import { Grid, Typography } from '@mui/material';
import Context from '../../context/Context';

function PaymentCheckoutMsg() {
  const { paymentStage, checkout } = useContext(Context);
  const istallmentPriceConverted = checkout?.installmentPrice?.toLocaleString(
    'pt-br',
    { style: 'currency', currency: 'BRL' },
  );
  const msgCheckoutStage1 = `${checkout?.client}, como você quer pagar?`;
  const msgCheckoutStage2 = `${checkout?.client},pague a entrada de R$ 
    ${istallmentPriceConverted} pelo Pix`;
  const msgCheckoutStage3 = `${checkout?.client}, pague o restante em 
    ${checkout?.installmentNumber ? checkout.installmentNumber - 1 : ''}x no cartão `;

  function getCheckoutMessage(stage: number, msg1: string, msg2: string, msg3: string) {
    switch (stage) {
      case 1:
        return msg1;
      case 2:
        return msg2;
      case 3:
        return msg3;
      default:
        return '';
    }
  }

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
        style={ {
          fontWeight: 'bold',
          marginBottom: '15px',
          textAlign: 'center',
          maxWidth: '60%',
          wordWrap: 'break-word',
        } }
      >
        {
          getCheckoutMessage(
            paymentStage ?? 1,
            msgCheckoutStage1,
            msgCheckoutStage2,
            msgCheckoutStage3,
          )
        }
      </Typography>
    </Grid>
  );
}

export default PaymentCheckoutMsg;
