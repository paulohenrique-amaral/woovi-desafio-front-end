import { useState, useEffect, useCallback, useContext } from 'react';
import { Grid, Container, Box, Typography, TextField, styled, FormControl } from '@mui/material';
import Button from '@mui/material/Button';
import Context from '../../context/Context';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import theme from '../../themes/default';

const FormStyled = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

const CssTextField = {
  margin: '20px 5px',
  '& .MuiInputLabel-root': {
    color: '#6F7E8C',
  },
  '& label.Mui-focused': {
    color: theme.palette.primary.main,
  },
};

const style = {
  position: 'absolute' as const,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  // alignItems: 'center',
  overflow: 'auto',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const schemaForm = z.object({
  person: z.object({
    name: z.string().min(3, 'Por favor, insira um nome válido'),
    cpf: z.string().min(11, 'Por favor, insira um CPF válido'),
    cardNumber: z.string().min(6, 'Por favor, insira um numero de cartão válido'),
    expDate: z.string().min(1, 'Por favor, insira uma data válida'),
    cvv: z.string().min(11, 'Por favor, insira o código de segurança de 3 dígitos'),
    instalments: z.string().min(1, 'Por favor, escolha o número de parcelas'),
  }),
});

type FormValues = z.infer<typeof schemaForm>;

function FormCheckout() {
  const { setEtapaAtual, personData, setPersonData, checkout, total } = useContext(Context);

  const instalments = checkout?.installmentNumber
    && checkout?.installmentNumber - 1;
  const instalmentsValue = checkout?.installmentPrice 
    && checkout?.installmentPrice.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
  });

  const { register, handleSubmit, formState, watch, setValue, control } = useForm<FormValues>({
    criteriaMode: 'all',
    mode: 'all',
    resolver: zodResolver(schemaForm),
    defaultValues: {
      person: {
        name: '',
        cpf: '',
        cardNumber: '',
        expDate: '',
        cvv: '',
        instalments: `${instalments}`,
      },
    },
  });

  const { errors, isSubmitting, isDirty, isValid } = formState;

  const handleSubmitForm = (data: FormValues) => {
    // if (isValid) {
      // setEtapaAtual(2);
    // }
    // const updatedData = { ...personData, ...data };
    // setPersonData(updatedData);
    console.log(data);
  };
  // console.log(checkout?.installmentNumber);
  

  return (
    <FormStyled
      onSubmit={ handleSubmit(handleSubmitForm) }
    >
      <Typography variant="h5">
        Informações do Comprador
      </Typography>
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
          xs={6}
          md={6}
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
          xs={6}
          md={6}
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
      <FormControl sx={{ ...CssTextField, backgroundColor: '#fff', width: '100%' }}>
        <InputLabel id="instalments-label" shrink>Parcelas</InputLabel>
        <Controller
          name="person.instalments"
          control={control}
          defaultValue={`${instalments}`}
          render={({ field }) => (
            <Select
              {...field}
              labelId="instalments-label"
              id="instalments"
              label="Parcelas"
            >
              <MenuItem value={instalments}>
                {`${instalments}x de ${instalmentsValue}`}
              </MenuItem>
            </Select>
          )}
        />
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        color='secondary'
      >
        Pagar
      </Button>
    </FormStyled>
  );
}

export default FormCheckout;