import { Grid, TextField, FormControl } from '@mui/material';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Controller } from 'react-hook-form';
import { FormStyled, CssTextField } from './FormCheckoutStyled';
import { useFormCheckout } from '../../hook/useFormCheckout';

function FormCheckout() {
  const {
    register,
    handleSubmit,
    errors,
    control,
    handleSubmitForm,
    instalments,
    instalmentsValue,
  } = useFormCheckout();

  // console.log(checkout);

  return (
    <FormStyled
      onSubmit={ handleSubmit(handleSubmitForm) }
    >
      <TextField
        id="name"
        { ...register('person.name') }
        type="text"
        placeholder="Nome Completo"
        label="Nome Completo"
        sx={ { ...CssTextField } }
        error={ !!errors.person?.name }
        helperText={ errors.person?.name?.message }
      />
      <TextField
        id="cpf"
        { ...register('person.cpf') }
        type="text"
        placeholder="CPF"
        label="CPF"
        sx={ { ...CssTextField } }
        error={ !!errors.person?.cpf }
        helperText={ errors.person?.cpf?.message }
      />
      <TextField
        id="cardNumber"
        { ...register('person.cardNumber') }
        type="text"
        placeholder="Número do Cartão"
        label="Número do Cartão"
        sx={ { ...CssTextField } }
        error={ !!errors.person?.cardNumber }
        helperText={ errors.person?.cardNumber?.message }
      />
      <Grid container>
        <Grid
          item
          xs={ 6 }
          md={ 6 }
        >
          <TextField
            id="expDate"
            { ...register('person.expDate') }
            type="text"
            placeholder="Vencimento"
            label="Vencimento"
            sx={ { ...CssTextField } }
            error={ !!errors.person?.expDate }
            helperText={ errors.person?.expDate?.message }
          />
        </Grid>
        <Grid
          item
          xs={ 6 }
          md={ 6 }
        >
          <TextField
            id="cvv"
            { ...register('person.cvv') }
            type="text"
            placeholder="cvv"
            label="cvv"
            sx={ { ...CssTextField } }
            error={ !!errors.person?.cvv }
            helperText={ errors.person?.cvv?.message }
          />
        </Grid>
      </Grid>
      <FormControl sx={ { ...CssTextField, backgroundColor: '#fff', width: '100%' } }>
        <InputLabel id="instalments-label" shrink>Parcelas</InputLabel>
        <Controller
          name="person.value"
          control={ control }
          defaultValue={ instalments }
          render={ ({ field }) => (
            <Select
              { ...field }
              labelId="instalments-label"
              id="instalments"
              label="Parcelas"
            >
              <MenuItem value={ instalments }>
                {`${instalments}x de ${instalmentsValue}`}
              </MenuItem>
            </Select>
          ) }
        />
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
      >
        Pagar
      </Button>
    </FormStyled>
  );
}

export default FormCheckout;
