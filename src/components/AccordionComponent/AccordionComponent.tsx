import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled, Typography } from '@mui/material';
import { Margin } from '@mui/icons-material';

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  background: 'none',
  boxShadow: 'none',
  '&:before': {
    display: 'none',
  },
  '&.Mui-expanded': {
    margin: '0',
  },
}));

function AccordionComponent() {
  return (
    <div>
      <CustomAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography style={ { fontWeight: 'bold' } }>
            Como funciona?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur.
        </AccordionDetails>
      </CustomAccordion>
    </div>
  );
}

export default AccordionComponent;