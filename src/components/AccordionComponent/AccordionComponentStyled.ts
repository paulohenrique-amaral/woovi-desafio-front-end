import { styled } from '@mui/material';
import Accordion from '@mui/material/Accordion';

export const CustomAccordion = styled(Accordion)(({ theme }) => ({
  background: 'none',
  boxShadow: 'none',
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: '0',
  },
}));
