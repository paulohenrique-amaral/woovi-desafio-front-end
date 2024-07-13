import { useState, useContext, useEffect } from 'react';
import { Box } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Context from '../../context/Context';
import { CustomConnector } from './PaymentStepperStyled';

function PaymentStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const { paymentStage, checkout } = useContext(Context);
  const numberOfPayments = checkout?.installmentNumber || 1;

  // const paymentSteps = Array.from({ length: numberOfPayments }, (_, index) => {
  //   if (index === 0) {
  //     return `${index + 1}ª entrada no Pix`;
  //   } else {
  //     return `${index + 1}ª no cartão`;
  //   }
  // });

  useEffect(() => {
    if (paymentStage === 3) {
      setActiveStep(1);
    } else {
      setActiveStep(0);
    }
  }, [paymentStage]);

  const paymentSteps = [
    '1ª entrada no Pix',
    `${numberOfPayments - 1}x no cartão`,
  ];

  return (
    <Box sx={ { width: '100%' } }>
      <Stepper
        activeStep={ activeStep }
        alternativeLabel
        orientation="vertical"
        connector={ <CustomConnector /> }
      >
        {paymentSteps.map((label, index) => (
          <Step key={ label }>
            <StepLabel
              style={ { padding: '10px 0' } }
              icon={
                <Box
                  display="flex"
                  alignItems="center"
                  gap={ 1 }
                >
                  {index <= activeStep ? (
                    <CheckCircleIcon color="primary" />
                  ) : (
                    <RadioButtonUncheckedIcon color="disabled" />
                  )}
                  {label}
                </Box>
              }
            />
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default PaymentStepper;
