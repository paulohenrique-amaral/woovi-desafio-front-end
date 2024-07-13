import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import { Box, Typography, Grid } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import theme from '../../themes/default';
import FlagPromo from '../FlagPromo/FlagPromo';
import { style, ButtonStyled } from './PaymentCardStyled';

function calculateInstallments(total: number, numInstallments: number) {
  const installments = [];
  for (let i = 1; i <= numInstallments; i += 1) {
    const installmentValue = (total / i);
    installments.push(installmentValue);
  }
  return installments;
}

type PaymentCardProps = {
  total: number;
  numInstallments: number;
  firstIndex: number;
  lastIndex: number;
  bestOption: number;
  selected: number | null;
  handleToggle: (parcelId: number, value: number) => void;
};

function PaymentCard({
  handleToggle,
  total,
  numInstallments,
  firstIndex,
  lastIndex,
  bestOption,
  selected,
}: PaymentCardProps) {
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
          fontSize: '0.8rem',
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
              <ButtonStyled
                selected={ selected }
                customIndex={ customIndex }
                index={ index }
                installmentOptionsLength={ installmentOptions.length }
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
                  <Grid
                    sx={ { display: 'flex', flexDirection: 'column' } }
                  >
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
                      <Typography
                        sx={ {
                          fontSize: '.7rem',
                          fontWeight: 'bold',
                          color: theme.palette.primary.main,
                        } }
                      >
                        Ganhe 3% de Caskback
                      </Typography>
                    )}
                  </Grid>
                </ListItem>
                {!singleInstallment && (
                  <Box
                    sx={ {
                      width: '100%',
                      display: 'flex',
                      paddingLeft: '15px',
                    } }
                  >
                    <Typography
                      sx={ {
                        fontSize: '.8rem', color: theme.palette.text.secondary,
                      } }
                    >
                      {
                      `Total: ${
                        (value * customIndex).toLocaleString('pt-BR', {
                          style: 'currency',
                          currency: 'BRL',
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })
                      }`
                    }
                    </Typography>
                  </Box>
                )}
                <Box sx={ { width: '100%' } }>
                  {singleInstallment && (
                    <FlagPromo>
                      <span style={ { fontWeight: 'bold', fontSize: '.8rem' } }>
                        🤑 R$ 300,00
                      </span>
                      <span>
                        de volta no seu Pix na hora
                      </span>
                    </FlagPromo>
                  )}
                  {(index + firstIndex + 1) === bestOption && (
                    <FlagPromo>
                      <span style={ { fontWeight: 'bold', fontSize: '.8rem' } }>
                        -3% de juros:
                      </span>
                      <span>
                        Melhor opção de parcelamento
                      </span>
                    </FlagPromo>
                  )}
                </Box>
              </ButtonStyled>
            </div>
          );
        })}
      </List>
    </Box>

  );
}

export default PaymentCard;
