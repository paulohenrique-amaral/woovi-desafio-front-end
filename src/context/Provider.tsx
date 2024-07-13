import { useState } from 'react';
import { ProviderProps, ProviderValues, typeCheckout } from '../types/types';
import Context from './Context';

const initialState: typeCheckout = {
  client: '',
  installmentNumber: 0,
  installmentPrice: 0,
  creditData: {
    name: '',
    cpf: '',
    creditCard: '',
    cvv: '',
    expirationDate: '',
  },
};

function Provider({ children }: ProviderProps) {
  const [total, setTotal] = useState(0);
  const [paymentStage, setPaymentStage] = useState<number>(1);
  const [checkout, setCheckout] = useState<typeCheckout>(initialState);

  function updateCheckout(key: keyof typeCheckout, value: any) {
    setCheckout((prev) => ({ ...prev, [key]: value }));
  }

  const value: ProviderValues = {
    total,
    setTotal,
    paymentStage,
    setPaymentStage,
    checkout,
    updateCheckout,
  };

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
