import { useContext, useState } from 'react';
import { Grid, Box } from '@mui/material';
import Context from '../../context/Context';
import PaymentCard from '../PaymentCard/PaymentCard';
import PaymentCheckoutMsg from '../PaymentCheckoutMsg/PaymentCheckoutMsg';

function PaymentOptions() {
  const [selected, setSelected] = useState<number | null>(null);
  const { total, setPaymentStage, updateCheckout } = useContext(Context);

  const handleToggle = (parcelId: number, value: number) => {
    setSelected((currentSelected: number | null) => (
      currentSelected === parcelId ? null : parcelId
    ));
    updateCheckout('installmentNumber', parcelId);
    updateCheckout('installmentPrice', value);
    setTimeout(() => {
      setPaymentStage(2);
    }, 1200);
  };

  return (
    <Grid container>
      <PaymentCheckoutMsg />
      <Grid
        item
        xs={ 12 }
        sx={ {
          marginBottom: '40px',
          display: 'flex',
          justifyContent: 'center',
        } }
      >
        <Box
          sx={ {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          } }
        >
          <PaymentCard
            total={ total }
            numInstallments={ 7 }
            firstIndex={ 0 }
            lastIndex={ 1 }
            bestOption={ 4 }
            selected={ selected }
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
          justifyContent: 'center',
        } }
      >
        <Box
          sx={ {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          } }
        >
          <PaymentCard
            total={ total }
            numInstallments={ 7 }
            firstIndex={ 1 }
            lastIndex={ 7 }
            bestOption={ 4 }
            selected={ selected }
            handleToggle={ handleToggle }
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default PaymentOptions;
