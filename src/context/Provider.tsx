import { useState } from 'react';
import { ProviderProps, ProviderValues, TypeCheckout } from '../types/types';
import Context from './Context';
import { initialState } from '../help/helper';

function Provider({ children }: ProviderProps) {
  const [total, setTotal] = useState(0);
  const [paymentStage, setPaymentStage] = useState<number>(1);
  const [checkout, setCheckout] = useState<TypeCheckout>(initialState);

  function updateCheckout(key: keyof TypeCheckout, value: any) {
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
