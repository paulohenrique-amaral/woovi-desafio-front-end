import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';
import { CustomAccordion } from './AccordionComponentStyled';

function AccordionComponent() {
  return (
    <CustomAccordion>
      <AccordionSummary
        expandIcon={ <ExpandMoreIcon /> }
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
  );
}

export default AccordionComponent;
