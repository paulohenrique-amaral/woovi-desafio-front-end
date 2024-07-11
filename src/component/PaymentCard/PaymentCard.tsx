import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Box, Typography, styled } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import theme from '../../themes/default';

const style = {
  p: 0,
  width: '100%',
  maxWidth: 360,
  borderRadius: 2,
  border: '1px solid',
  borderColor: theme.palette.background.paper,
  backgroundColor: theme.palette.background.default,
};

// const ListItemStyled = styled(ListItem)(({ theme: styledTheme }) => ({
//   border: '1px solid',
//   borderColor: selected === value
//     ? theme.palette.primary.main
//     : theme.palette.background.paper,
//   backgroundColor: selected === value
//     ? theme.palette.action.selected
//     : theme.palette.background.default,
// }));

function calculateInstallments(total, numInstallments) {
  const installments = [];
  for (let i = 1; i <= numInstallments; i += 1) {
    const installmentValue = (total / i).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    installments.push(`${i}x ${installmentValue}`);
  }
  return installments;
}

function getBorderRadius(index, length) {
  if (length === 1) {
    return '5px';
  } if (index === 0) {
    return '5px 5px 0 0';
  } if (index === length - 1) {
    return '0 0 5px 5px';
  }
  return '0';
}

function PaymentCard() {
  const [selected, setSelected] = useState(null);
  const total = 30500; // Total da compra
  const numInstallments = 7; // Número de parcelas
  const installmentOptions = calculateInstallments(total, numInstallments);

  const handleToggle = (value: any) => () => {
    setSelected(selected === value ? null : value);
  };
  return (
    <Box sx={ { position: 'relative', width: '100%', maxWidth: 360 } }>
      <Box
        sx={ {
          position: 'absolute',
          top: -14,
          left: 16,
          backgroundColor: 'grey.300',
          borderRadius: '12px',
          px: 2,
          py: 0.5,
          fontSize: '0.75rem',
          fontWeight: 'bold',
          zIndex: 1,
        } }
      >
        PIX
      </Box>
      <List sx={ { ...style } } aria-label="opções de parcelamento">
        {installmentOptions.map((value, index) => (
          <div key={ value }>
            {index !== 0 && <Divider component="li" />}
            <ListItem
              sx={ {
                border: '1px solid',
                // borderRadius: 2,
                borderColor: selected === value
                  ? theme.palette.primary.main : theme.palette.background.paper,
                backgroundColor: selected === value
                  ? theme.palette.action.selected : theme.palette.background.default,
                borderRadius: getBorderRadius(index, installmentOptions.length),
              } }
              secondaryAction={
                <Checkbox
                  edge="end"
                  onChange={ handleToggle(value) }
                  checked={ selected === value }
                  inputProps={ { 'aria-labelledby': `checkbox-list-label-${value}` } }
                  icon={ <RadioButtonUncheckedIcon /> }
                  checkedIcon={ <CheckCircleIcon /> }
                  sx={ { '& .MuiSvgIcon-root': { fontSize: 28 } } }
                />
            }
            >
              <ListItemText id={ `checkbox-list-label-${value}` } primary={ value } />
            </ListItem>
            {/* <Divider component="li" /> */}
          </div>
        ))}
      </List>
    </Box>

  );
}

export default PaymentCard;
