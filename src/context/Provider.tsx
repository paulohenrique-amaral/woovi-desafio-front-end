import { useState } from 'react';
import { ProviderProps, ProviderValues } from '../types/types';
import Context from './Context';

function Provider({ children }: ProviderProps) {
  const [total, setTotal] = useState(0);

  const value: ProviderValues = {
    total,
    setTotal,
  };

  return (
    <Context.Provider value={ value }>
      {children}
    </Context.Provider>
  );
}

export default Provider;
