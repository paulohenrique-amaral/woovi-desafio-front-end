export type TypeCheckout = {
  client: string;
  installmentNumber?: number | 1;
  installmentPrice?: number | 0;
  person: {
    name: string;
    cpf: string;
    cardNumber: string;
    cvv: string;
    expirationDate: string;
    value: number;
  };
};

export type ProviderValues = {
  total: number;
  setTotal: (value: number) => void;
  paymentStage: number | null;
  setPaymentStage: (value: number) => void;
  checkout: TypeCheckout | undefined;
  updateCheckout: (key: keyof TypeCheckout, value: any) => void;
};

export type ProviderProps = {
  children: React.ReactNode;
};
