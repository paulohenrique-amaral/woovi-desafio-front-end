import { useContext } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import Context from '../../context/Context';
import theme from '../../themes/default';
import PaymentStepper from '../PaymentStepper/PaymentStepper';
import PaymentStepperValue from '../PaymentStepperValue/PaymentStepperValue';
import AccordionComponent from '../AccordionComponent/AccordionComponent';

function PaymentResumeCheckout() {
  const { total, setPaymentStage, paymentStage } = useContext(Context);
  return (
    <Grid container>
      <Grid
        item
        xs={ 12 }
        md={ 12 }
        sx={ {
          display: 'flex',
          paddingBottom: '10px',
          borderBottom: `1px solid ${theme.palette.text.secondary}`,
        } }
      >
        <Grid
          item
          xs={ 6 }
          md={ 6 }
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
          xs={ 6 }
          md={ 6 }
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
        xs={ 12 }
        md={ 12 }
        sx={ {
          display: 'flex',
          padding: '20px 10px',
          borderBottom: `1px solid ${theme.palette.text.secondary}`,
        } }
      >
        <Grid item xs={ 6 } md={ 6 }>
          <Box>
            <Typography>
              CET: 0,5%
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={ 6 }
          md={ 6 }
          sx={ {
            display: 'flex',
            justifyContent: 'end',
          } }
        >
          <Box>
            <Typography style={ { fontWeight: 'bold' } }>
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
        xs={ 12 }
        md={ 12 }
        sx={ {
          display: 'flex',
          padding: '10px 0px',
          borderBottom: `1px solid ${theme.palette.text.secondary}`,
          marginBottom: '20px',
        } }
      >
        <Box sx={ { width: '100%' } }>
          <AccordionComponent />
        </Box>
      </Grid>
      <Grid
        item
        xs={ 12 }
        md={ 12 }
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
          {paymentStage === 2 && (
            <Box
              sx={ {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '30px',
              } }
            >
              <Button
                variant="outlined"
                color="secondary"
                onClick={ () => setTimeout(() => setPaymentStage(3), 900) }
              >
                Avançar
              </Button>
            </Box>
          )}
          <Typography style={ { color: theme.palette.text.secondary } }>
            Identificador:
          </Typography>
          <Typography style={ { fontWeight: 'bold' } }>
            2c1b951f356c4680b13ba1c9fc889c47
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default PaymentResumeCheckout;
