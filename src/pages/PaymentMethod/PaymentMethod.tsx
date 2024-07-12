import { useContext, useState, useEffect } from 'react';
import { Container, Grid, Box, Typography, styled, keyframes } from '@mui/material';
import Context from '../../context/Context';
import PaymentCard from '../../components/PaymentCard/PaymentCard';
import PaymentOptions from '../../components/PaymentOptions/PaymentOptions';
import PaymentCheckout from '../../components/PaymentCheckout/PaymentCheckout';

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
  animation: `${animation} 0.9s linear forwards`,
}));

function PaymentMethod() {
  const [animation, setAnimation] = useState(slideInRight);
  const {paymentStage, setPaymentStage, updateCheckout, checkout} = useContext(Context);
  const [showPaymentOptions, setShowPaymentOptions] = useState(true);
  const [showPaymentCheckout, setShowPaymentCheckout] = useState(false);

  useEffect(() => {
    updateCheckout('client', 'João');
    setPaymentStage(1);
  }, [setPaymentStage]);

  useEffect(() => {
    if (paymentStage === 1) {
      setShowPaymentOptions(true);
      setShowPaymentCheckout(false);
      setAnimation(slideInRight);
    } else if (paymentStage === 2) {
      setAnimation(slideOutRight);
      // Aguarde a animação de saída terminar antes de mostrar o próximo componente
      setTimeout(() => {
        setShowPaymentOptions(false);
        setShowPaymentCheckout(true);
        setAnimation(slideInRight); // Inicia a animação de entrada para o próximo componente
      }, 900); // O tempo deve coincidir com a duração da animação
    }
  }, [paymentStage]);
  

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={12}>
          {showPaymentOptions && (
            <BoxStyled animation={animation}>
              <PaymentOptions />
            </BoxStyled>
          )}
          {showPaymentCheckout && (
            <BoxStyled animation={animation}>
              <PaymentCheckout />
            </BoxStyled>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}

export default PaymentMethod;
