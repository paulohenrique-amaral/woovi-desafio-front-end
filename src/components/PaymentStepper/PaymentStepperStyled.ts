import { styled } from '@mui/material';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

export const CustomConnector = styled(StepConnector)(({ theme }) => ({
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
