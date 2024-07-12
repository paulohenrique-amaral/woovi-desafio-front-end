import { useContext, useState } from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import Context from '../../context/Context';
import PaymentCard from '../../components/PaymentCard/PaymentCard';

function PaymentOptions() {
  const [selected, setSelected] = useState<number | null>(null);
  const { total, setTotal, setPaymentStage } = useContext(Context);

  const handleToggle = (parcelId: number) => {
    console.log('Selecionado:', parcelId);
    setSelected((currentSelected: number | null) => currentSelected === parcelId ? null : parcelId);
    setPaymentStage(2);
  };

  console.log(selected);
  return (
      <Grid container>
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
          <Typography variant="h6" style={ { fontWeight: 'bold', marginBottom: '15px' } }>
            João como você quer pagar?
          </Typography>
        </Grid>
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
              total={ 30500 }
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
              total={ 30500 }
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
