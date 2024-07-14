import { z } from 'zod';

export const schemaForm = z.object({
  person: z.object({
    name: z.string().min(3, 'Por favor, insira um nome válido'),
    cpf: z.string().min(11, 'Por favor, insira um CPF válido'),
    cardNumber: z.string().min(16, 'Por favor, insira um numero de cartão válido'),
    expDate: z.string().min(4, 'Por favor, insira uma data válida'),
    cvv: z.string().min(3, 'Por favor, insira o código de segurança de 3 dígitos'),
    value: z.number().min(1, 'Por favor, escolha o número de parcelas'),
  }),
});

export type FormValues = z.infer<typeof schemaForm>;
