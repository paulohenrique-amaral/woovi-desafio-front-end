import { useState, useContext } from 'react';
import Context from '../../context/Context';
import { Box, styled } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import theme from '../../themes/default';

const CustomConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.vertical}`]: {
    marginLeft: '39px',
    top: '-12px',
    bottom: '12px',
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.text.secondary,
    marginLeft: '12px',
  },
}));

function PaymentStepper() {
  const { paymentStage, checkout, total } = useContext(Context);

  const numberOfPayments = checkout?.installmentNumber || 1;

  // const paymentSteps = Array.from({ length: numberOfPayments }, (_, index) => {
  //   if (index === 0) {
  //     return `${index + 1}ª entrada no Pix`;
  //   } else {
  //     return `${index + 1}ª no cartão`;
  //   }
  // });

  const paymentSteps = [
    '1ª entrada no Pix',
    `${numberOfPayments - 1}x no cartão`,
  ];
  
  const [activeStep, setActiveStep] = useState(0);
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel orientation="vertical" connector={<CustomConnector/>}>
        {paymentSteps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              icon={
                <Box display="flex" alignItems="center" gap={1}>
                  {index <= activeStep ? (
                    <CheckCircleIcon color="primary" />
                  ) : (
                    <RadioButtonUncheckedIcon color='disabled' />
                  )}
                  {label}
                </Box>
              }
              style={{ padding: '10px 0' }}
            />
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default PaymentStepper;