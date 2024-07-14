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
          sx={ (theme) => ({
            marginBottom: '10px',
            [theme.breakpoints.up('md')]: {
              padding: '20px',
            },
          }) }
        >
          <FormCheckout />
        </Box>
        <Box
          sx={ (theme) => ({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '10px',
            [theme.breakpoints.up('md')]: {
              marginBottom: '100px',
            },
          }) }
        >
          <PaymentExpired />
        </Box>
      </Grid>
      <Grid
        item
        xs={ 12 }
        md={ 6 }
      >
        <Box
          sx={ (theme) => ({
            [theme.breakpoints.up('md')]: {
              padding: '40px 20px',
            },
          }) }
        >
          <PaymentResumeCheckout />
        </Box>
      </Grid>
    </Grid>
  );
}

export default PaymentFormCreditCard;
