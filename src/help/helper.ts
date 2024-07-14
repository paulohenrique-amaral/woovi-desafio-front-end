import { TypeCheckout } from '../types/types';

export const getDateExpired = () => {
  const agora = new Date();
  agora.setMinutes(agora.getMinutes() + 5); // Adiciona 5 minutos à data/hora atual
  const dia = agora.getDate().toString().padStart(2, '0');
  const mes = (agora.getMonth() + 1).toString().padStart(2, '0'); // getMonth() retorna mês de 0 a 11
  const ano = agora.getFullYear();
  const hora = agora.getHours().toString().padStart(2, '0');
  const minuto = agora.getMinutes().toString().padStart(2, '0');
  return `${dia}/${mes}/${ano} - ${hora}:${minuto}`;
};

export const initialState: TypeCheckout = {
  client: '',
  installmentNumber: 0,
  installmentPrice: 0,
  person: {
    name: '',
    cpf: '',
    cardNumber: '',
    cvv: '',
    expirationDate: '',
    value: 0,
  },
};
export const handleCopyClick = () => {
  navigator.clipboard.writeText('Codigo copiado para a area de transferencia');
};
