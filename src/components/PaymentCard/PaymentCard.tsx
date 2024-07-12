import { useState, useCallback } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import { Box, Typography, styled, ButtonBase, Grid } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import theme from '../../themes/default';
import FlagPromo from '../FlagPromo/FlagPromo';

const style = {
  p: 0,
  width: '100%',
  // maxWidth: 360,
  borderRadius: 2,
  border: '1px solid',
  borderColor: theme.palette.background.paper,
  backgroundColor: theme.palette.background.default,
};

function calculateInstallments(total: number, numInstallments: number) {
  const installments = [];
  for (let i = 1; i <= numInstallments; i += 1) {
    const installmentValue = (total / i)
    installments.push(installmentValue);
  }
  return installments;
}

function getBorderRadius(index: number, length: number) {
  if (length === 1) {
    return '5px';
  } if (index === 0) {
    return '5px 5px 0 0';
  } if (index === length - 1) {
    return '0 0 5px 5px';
  }
  return '0';
}

type PaymentCardProps = {
  total: number;
  numInstallments: number;
  firstIndex: number;
  lastIndex: number;
  bestOption: number;
  selected: number | null;
  setSelected: React.Dispatch<React.SetStateAction<number | null>>;
  handleToggle: (parcelId: number, value: number) => void;
};

function PaymentCard({handleToggle, total, numInstallments, firstIndex, lastIndex, bestOption, selected, setSelected}: PaymentCardProps) {
  const singleInstallment = lastIndex <= 1;
  const installmentOptions = calculateInstallments(total, numInstallments);
  
  return (
    <Box sx={ { position: 'relative', width: '100%', maxWidth: 460 } }>
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
        {singleInstallment ? 'Pix' : 'Pix Parcelado'}
      </Box>
      <List sx={ { ...style } } aria-label="opções de parcelamento">
        {installmentOptions.slice(firstIndex, lastIndex).map((value, index) => {
          const customIndex = index + firstIndex + 1;

          return (
            <div key={ customIndex }>
            {index !== 0 && <Divider component="li" />}
            <ButtonBase
              component="div"
              style={ { 
                padding: '10px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                border: selected === customIndex ? '2px solid' : '1px solid',
                borderColor: selected === customIndex
                  ? theme.palette.primary.main : theme.palette.background.paper,
                backgroundColor: selected === customIndex
                  ? 'rgba(3, 214, 157, 0.1)' : theme.palette.background.default,
                borderRadius: getBorderRadius(index, installmentOptions.length),
              } }
              onClick={ () => handleToggle(customIndex, value) }
              >
                <ListItem
                  sx={ { paddingBottom: '0px' } }
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      onChange={ () => handleToggle(customIndex, value) }
                      checked={ selected === customIndex }
                      inputProps={ { 'aria-labelledby': `checkbox-list-label-${value}` } }
                      icon={ <RadioButtonUncheckedIcon /> }
                      checkedIcon={ <CheckCircleIcon /> }
                      sx={ { '& .MuiSvgIcon-root': { fontSize: 28 } } }
                    />
                  }
                >
                  <Grid sx={ {display: 'flex', flexDirection: 'column'} }>
                    <Box sx={ { display: 'flex', gap: '.5rem' } }>
                      <Typography sx={ { fontWeight: 'bold', fontSize: '1.2rem' } }>
                        {`${customIndex}x`}
                      </Typography>
                      <Typography sx={ { fontSize: '1.2rem' } }>
                      {value.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                      </Typography>                    
                    </Box>
                    {singleInstallment && (
                      <Typography sx={ { fontSize: '.6rem', color: theme.palette.primary.main } }>
                        Ganhe 3% de Caskback
                      </Typography>
                    )}
                  </Grid>
                </ListItem>
                <Box sx={ { width: '100%', paddingLeft: '15px' } }>
                  <Typography sx={ { fontSize: '.6rem', color: theme.palette.text.secondary } }>
                  {`Total: ${((index + firstIndex + 1) * value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
                  </Typography>
                </Box>            
                <Box sx={ { width: '100%' } }>
                  {singleInstallment && (
                    <FlagPromo>
                      <span style={ { fontWeight: 'bold', fontSize: '.6rem' } }>
                        🤑 R$ 300,00
                      </span>
                      <span>
                        de volta no seu Pix na hora
                      </span>
                    </FlagPromo>
                  )}
                  {(index + firstIndex + 1) === bestOption && (
                    <FlagPromo>
                      <span style={ { fontWeight: 'bold', fontSize: '.6rem' } }>
                        -3% de juros:
                      </span>
                      <span>
                        Melhor opção de parcelamento
                      </span>
                    </FlagPromo>
                  )}
                </Box>
              </ButtonBase>
          </div>
          )})}
      </List>
    </Box>

  );
}

export default PaymentCard;
