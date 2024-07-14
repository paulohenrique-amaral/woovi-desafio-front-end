import { useContext, useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import Context from '../../context/Context';
import PaymentOptions from '../../components/PaymentOptions/PaymentOptions';
import PaymentCheckout from '../../components/PaymentCheckout/PaymentCheckout';
import PaymentFormCreditCard
  from '../../components/PaymentFormCreditCard/PaymentFormCreditCard';
import CheckoutSucess from '../../components/CheckoutSucess/CheckoutSucess';
import { slideInRight, slideOutRight, BoxStyled } from './PaymentMethodStyled';

function PaymentMethod() {
  const [animation, setAnimation] = useState(slideInRight);
  const { paymentStage, updateCheckout, setTotal } = useContext(Context);
  const [showPaymentOptions, setShowPaymentOptions] = useState(true);
  const [showPaymentCheckout, setShowPaymentCheckout] = useState(false);
  const [showPaymentFormCreditCard, setShowPaymentFormCreditCard] = useState(false);
  const [showSucess, setShowShowSucess] = useState(false);

  useEffect(() => {
    updateCheckout('client', 'João');
    setTotal(30500);
  }, [setTotal]);

  useEffect(() => {
    if (paymentStage === 1) {
      setShowPaymentOptions(true);
      setShowPaymentCheckout(false);
      setAnimation(slideInRight);
    } else if (paymentStage === 2) {
      setAnimation(slideOutRight);
      setTimeout(() => {
        setShowPaymentOptions(false);
        setShowPaymentCheckout(true);
        setAnimation(slideInRight);
      }, 900);
    } else if (paymentStage === 3) {
      setAnimation(slideOutRight);
      setTimeout(() => {
        setShowPaymentCheckout(false);
        setShowPaymentFormCreditCard(true);
        setAnimation(slideInRight);
      }, 900);
    } else if (paymentStage === 4) {
      setAnimation(slideOutRight);
      setTimeout(() => {
        setShowPaymentFormCreditCard(false);
        setShowShowSucess(true);
        setAnimation(slideInRight);
      }, 900);
    }
  }, [paymentStage]);

  return (
    <Container maxWidth="lg">
      <Grid
        container
        sx={ {
          marginTop: '40px',
          display: 'flex',
          justifyContent: 'center',
        } }
      >
        <Grid item>
          {showPaymentOptions && (
            <Grid
              item
              xs={ 12 }
              md={ 12 }
            >
              <BoxStyled animation={ animation }>
                <PaymentOptions />
              </BoxStyled>
            </Grid>
          )}
          {showPaymentCheckout && (
            <Grid
              item
              xs={ 12 }
            >
              <BoxStyled animation={ animation }>
                <PaymentCheckout />
              </BoxStyled>
            </Grid>
          )}
          {showPaymentFormCreditCard && (
            <Grid
              item
              xs={ 12 }
            >
              <BoxStyled animation={ animation }>
                <PaymentFormCreditCard />
              </BoxStyled>
            </Grid>
          )}
          {showSucess && (
            <Grid
              item
              xs={ 12 }
            >
              <BoxStyled animation={ animation }>
                <CheckoutSucess />
              </BoxStyled>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default PaymentMethod;
