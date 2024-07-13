import { useContext, useState, useEffect } from 'react';
import { Container, Grid, Box, Typography, styled, keyframes } from '@mui/material';
import Context from '../../context/Context';
import PaymentCard from '../../components/PaymentCard/PaymentCard';
import PaymentOptions from '../../components/PaymentOptions/PaymentOptions';
import PaymentCheckout from '../../components/PaymentCheckout/PaymentCheckout';
import PaymentFormCreditCard from '../../components/PaymentFormCreditCard/PaymentFormCreditCard';

const slideInRight = keyframes`
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
`;

const slideOutRight = keyframes`
  0% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
`;

const BoxStyled = styled(Box)<{ animation: string }>(({ theme, animation }) => ({
  animation: `${animation} 0.9s`,
}));

function PaymentMethod() {
  const [animation, setAnimation] = useState(slideInRight);
  const {paymentStage, setPaymentStage, updateCheckout, setTotal} = useContext(Context);
  const [showPaymentOptions, setShowPaymentOptions] = useState(true);
  const [showPaymentCheckout, setShowPaymentCheckout] = useState(false);
  const [showPaymentFormCreditCard, setShowPaymentFormCreditCard] = useState(false);

  useEffect(() => {
    updateCheckout('client', 'João');
    setTotal(30500);
    setPaymentStage(1);
  }, [setPaymentStage]);

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
    }

  }, [paymentStage]);
  

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item>
        {showPaymentOptions && (
          <Grid
            item
            xs={12}
            md={12}
            // sx={{ overflow: 'auto' }}
          >
            <BoxStyled animation={animation}>
              <PaymentOptions />
            </BoxStyled>
          </Grid>            
        )}
        {showPaymentCheckout && (
          <Grid
          item
          xs={12}
          // md={12}sx={{ maxHeight: '100%' }}
        >
          <BoxStyled animation={animation}>
            <PaymentCheckout />
          </BoxStyled>
        </Grid>            
        )}
        {showPaymentFormCreditCard && (
          <Grid
          item
          xs={12}
        >
          <BoxStyled animation={animation}>
            <PaymentFormCreditCard />
          </BoxStyled>
        </Grid>            
        )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default PaymentMethod;
