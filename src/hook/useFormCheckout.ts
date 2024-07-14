import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Context from '../context/Context';
import { FormValues, schemaForm } from '../schema/schema';

export const useFormCheckout = () => {
  const { checkout, updateCheckout, setPaymentStage } = useContext(Context);
  const instalments = Math.max((checkout?.installmentNumber ?? 0) - 1, 0);
  const instalmentsValue = checkout?.installmentPrice
    && checkout?.installmentPrice.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const {
    register, handleSubmit, formState, control,
  } = useForm<FormValues>({
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
        value: instalments,
      },
    },
  });

  const { errors, isSubmitting } = formState;

  const asyncFunction = async () => {
    const myPromisse = new Promise((resolve) => {
      setTimeout(() => {
        resolve('API');
      }, 3000);
    });
    return myPromisse;
  };

  const handleSubmitForm = async (data: FormValues) => {
    const updatedData = { ...checkout, ...data };
    updateCheckout('person', updatedData.person);
    await asyncFunction();
    setPaymentStage(4);
    // console.log(data);
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    control,
    handleSubmitForm,
    instalments,
    instalmentsValue,
  };
};
