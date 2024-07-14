import { Grid, Box } from '@mui/material';
import Button from '@mui/material/Button';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PaymentCheckoutMsg from '../PaymentCheckoutMsg/PaymentCheckoutMsg';
import qrCode from '../../assets/qrCode.svg';
import PaymentResumeCheckout from '../PaymentResumeCheckout/PaymentResumeCheckout';
import { StyledImg } from './PaymentCheckoutStyled';
import PaymentExpired from '../PaymentExpired/PaymentExpired';

function PaymentCheckout() {
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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px',
          } }
        >
          <StyledImg src={ qrCode } alt="qr-code-img" />
        </Box>
        <Box
          sx={ {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '10px',
          } }
        >
          <Button
            variant="contained"
            endIcon={ <FileCopyIcon /> }
            color="secondary"
          >
            Clique para copiar QR CODE
          </Button>
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

export default PaymentCheckout;
