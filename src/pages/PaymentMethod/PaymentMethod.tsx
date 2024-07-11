import { useContext, useState } from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import Context from '../../context/Context';
import Header from '../../components/Header/Header';
import PaymentCard from '../../components/PaymentCard/PaymentCard';

function PaymentMethod() {
  const [selected, setSelected] = useState<number | null>(null);
  const { total, setTotal } = useContext(Context);

  const handleToggle = (value: number) => {
    console.log('Selecionado:', value);
    setSelected((currentSelected: number | null) => currentSelected === value ? null : value);
  };

  return (
    <Container maxWidth="lg">
      <Grid container>
        {/* <Grid
          item
          xs={ 12 }
        >
          <Header />
        </Grid> */}
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
    </Container>
  );
}

export default PaymentMethod;
