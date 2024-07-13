import { useContext, useState } from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import Context from '../../context/Context';
import PaymentCard from '../../components/PaymentCard/PaymentCard';
import PaymentCheckoutMsg from '../PaymentCheckoutMsg/PaymentCheckoutMsg';

function PaymentOptions() {
  const [selected, setSelected] = useState<number | null>(null);
  const { total, setPaymentStage, checkout, updateCheckout } = useContext(Context);

  const handleToggle = (parcelId: number, value: number) => {
    console.log('Selecionado:', parcelId);
    console.log('Parcela:', value);
    setSelected((currentSelected: number | null) => currentSelected === parcelId ? null : parcelId);
    updateCheckout('installmentNumber', parcelId);
    updateCheckout('installmentPrice', value);
    setPaymentStage(2);
  };

  console.log('checkout:', checkout);
  console.log('total:', total);
  return (
      <Grid container>
        <PaymentCheckoutMsg />
        <Grid
          item
          xs={ 12 }
          sx={ { 
            marginBottom: '40px',
            display: 'flex',
            justifyContent: 'center'
           } }
        >
          <Box sx={ { 
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
           } }>
            <PaymentCard
              total={ total }
              numInstallments={ 7 }
              firstIndex={ 0 }
              lastIndex={ 1 }
              bestOption={ 4 }
              selected={ selected }
              setSelected={ setSelected }
              handleToggle={ handleToggle }
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={ 12 }
          sx={ { 
            marginBottom: '100px',
            display: 'flex',
            justifyContent: 'center'
          } }
        >
          <Box sx={ { 
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
           } }>
            <PaymentCard
              total={ total }
              numInstallments={ 7 }
              firstIndex={ 1 }
              lastIndex={ 7 }
              bestOption={ 4 }
              selected={ selected }
              setSelected={ setSelected }
              handleToggle={ handleToggle }
            />
          </Box>
        </Grid>
      </Grid>
  );
}

export default PaymentOptions;
