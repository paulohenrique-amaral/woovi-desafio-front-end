import { useContext } from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import Context from '../../context/Context';
import Header from '../../component/Header/Header';

function PaymentMethod() {
  const { total, setTotal } = useContext(Context);
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid
          item
          xs={ 12 }
        >
          <Header />
        </Grid>
        <Grid
          item
          xs={ 12 }
          sx={ {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '5px 0',

          } }
        >
          <Typography variant="h6" style={ { fontWeight: 'bold' } }>
            João como você quer pagar?
          </Typography>
        </Grid>
        <Grid item xs={ 12 }>
          <Box>
            box preço
          </Box>
        </Grid>
        <Grid item xs={ 12 }>
          <Box>
            lista parcelas
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PaymentMethod;
