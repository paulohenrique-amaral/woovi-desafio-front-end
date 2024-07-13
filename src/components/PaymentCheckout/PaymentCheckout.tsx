import { Grid, Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PaymentCheckoutMsg from '../PaymentCheckoutMsg/PaymentCheckoutMsg';
import qrCode from '../../assets/qrCode.svg';
import theme from '../../themes/default';
import PaymentResumeCheckout from '../PaymentResumeCheckout/PaymentResumeCheckout';
import { StyledImg } from './PaymentCheckoutStyled';
import { getDateExpired } from '../../help/helper';

function PaymentCheckout() {
  const prazoLimite = getDateExpired();
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
          <Typography style={ { color: theme.palette.text.secondary } }>
            Prazo de pagamento:
          </Typography>
          <Typography style={ { fontWeight: 'bold' } }>
            {prazoLimite}
          </Typography>
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
