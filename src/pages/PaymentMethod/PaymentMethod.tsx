import { useContext, useState, useEffect } from 'react';
import { Container, Grid, Box, Typography, styled, keyframes } from '@mui/material';
import Context from '../../context/Context';
import PaymentCard from '../../components/PaymentCard/PaymentCard';
import PaymentOptions from '../../components/PaymentOptions/PaymentOptions';

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
  const {paymentStage, setPaymentStage} = useContext(Context);

  useEffect(() => {
    setPaymentStage(1);
  }, [setPaymentStage]);

  useEffect(() => {
    // Atualiza a animação com base no estado paymentStage
    if (paymentStage === 1) {
      setAnimation(slideInRight);
    } else if (paymentStage === 2) {
      setAnimation(slideOutRight);
    }
  }, [paymentStage]);

  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item>
          <BoxStyled animation={animation}>
            <PaymentOptions />
          </BoxStyled>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PaymentMethod;
