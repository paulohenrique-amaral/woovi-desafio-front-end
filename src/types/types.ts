export type ProviderValues = {
  total: number;
  setTotal: (value: number) => void;
  paymentStage: number | null;
  setPaymentStage: (value: number | null) => void;
};

export type ProviderProps = {
  children: React.ReactNode;
};
