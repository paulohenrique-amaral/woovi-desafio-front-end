import { Grid, Box } from '@mui/material';
import PaymentCheckoutMsg from '../PaymentCheckoutMsg/PaymentCheckoutMsg';
import FormCheckout from '../FormCheckout/FormCheckout';
import PaymentResumeCheckout from '../PaymentResumeCheckout/PaymentResumeCheckout';
import PaymentExpired from '../PaymentExpired/PaymentExpired';

function PaymentFormCreditCard() {
  return (
    <Grid container>
      <PaymentCheckoutMsg />
      <Grid
        item
        xs={ 12 }
        md={ 6 }
      >
        <Box
          sx={ {
            marginBottom: '20px',
          } }
        >
          <FormCheckout />
        </Box>
        <Box
          sx={ {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '10px',
          } }
        >
          <PaymentExpired />
        </Box>
      </Grid>
      <Grid
        item
        xs={ 12 }
        md={ 6 }
      >
        <PaymentResumeCheckout />
      </Grid>
    </Grid>
  );
}

export default PaymentFormCreditCard;
