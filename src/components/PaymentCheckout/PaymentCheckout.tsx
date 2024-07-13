import { useContext } from 'react';
import Context from '../../context/Context';
import { Container, Grid, Box, Typography, styled, keyframes } from '@mui/material';
import Button from '@mui/material/Button';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import PaymentCheckoutMsg from '../PaymentCheckoutMsg/PaymentCheckoutMsg';
import qrCode from '../../assets/qrCode.svg';
import theme from '../../themes/default';
import PaymentStepper from '../PaymentStepper/PaymentStepper';
import AccordionComponent from '../AccordionComponent/AccordionComponent';
import PaymentStepperValue from '../PaymentStepperValue/PaymentStepperValue';

const StyledImg = styled('img')(({ theme }) => ({
  padding: '5px',
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: '10px',
}));

function PaymentCheckout() {
  const { total, checkout, setPaymentStage } = useContext(Context);
  return (
    <Grid container>
      <PaymentCheckoutMsg />
      <Grid item xs={12} md={6}>
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
          endIcon={<FileCopyIcon />}
          color='secondary'
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
            12/12/2021
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid
          item
          xs={12}
          md={12}  
          sx={ {
            display: 'flex',
            paddingBottom: '10px',
            borderBottom: `1px solid ${theme.palette.text.secondary}`,
          } }
        >
          <Grid
            item
            xs={6}
            md={6}
            sx={ {
              display: 'flex',
              justifyContent: 'start',
            } }
          >
            <Box>
              <PaymentStepper />
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            md={6}
            sx={ {
              display: 'flex',
              justifyContent: 'end',
              padding: '10px',
            } }
          >
            <Box>
              <PaymentStepperValue />
            </Box>            
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={ {
            display: 'flex',
            padding: '20px 10px',
            borderBottom: `1px solid ${theme.palette.text.secondary}`,
          } }
        >
          <Grid item xs={6} md={6}>
            <Box>
              <Typography>
                CET: 0,5%
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            md={6}
            sx={ {
              display: 'flex',
              justifyContent: 'end',
            } }
          >
            <Box>
              <Typography style={ {fontWeight: 'bold'} }>
              {total.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={ {
            display: 'flex',
            padding: '10px 0px',
            borderBottom: `1px solid ${theme.palette.text.secondary}`,
          } }
        >
          <Box>
            <AccordionComponent />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={ {
            marginBottom: '150px',
          } }
        >
          <Box
            sx={ {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '20px 0px 20px 0px',
            } }
          >
            <Box
              sx={ {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '10px',
              } }
            >
            <Button
              variant="outlined"
              color='secondary'
              onClick={ () => setPaymentStage(1)}
            >
              Avançar
            </Button>
            </Box>
            <Typography style={ { color: theme.palette.text.secondary } }>
              Identificador:
            </Typography>
            <Typography style={ { fontWeight: 'bold' } }>
              2c1b951f356c4680b13ba1c9fc889c47
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PaymentCheckout;