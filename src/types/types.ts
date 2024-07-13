export type typeCheckout = {
  client: string;
  installmentNumber?: number | 1;
  installmentPrice?: number | 0;
  creditData: {
    name: string;
    cpf: string;
    creditCard: string;
    cvv: string;
    expirationDate: string;
  };
};

export type ProviderValues = {
  total: number;
  setTotal: (value: number) => void;
  paymentStage: number | null;
  setPaymentStage: (value: number | null) => void;
  checkout: typeCheckout | undefined;
  updateCheckout: (key: keyof typeCheckout, value: any) => void;
};

export type ProviderProps = {
  children: React.ReactNode;
};
