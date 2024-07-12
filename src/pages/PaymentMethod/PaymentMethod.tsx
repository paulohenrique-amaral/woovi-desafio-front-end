import { useContext, useState } from 'react';
import { Container, Grid, Box, Typography, styled } from '@mui/material';
import Context from '../../context/Context';
import PaymentCard from '../../components/PaymentCard/PaymentCard';
import PaymentOptions from '../../components/PaymentOptions/PaymentOptions';

const FooterStyled = styled('footer')(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  width: '100%',
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

function PaymentMethod() {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item>
          <PaymentOptions />
        </Grid>
      </Grid>
    </Container>
  );
}

export default PaymentMethod;
