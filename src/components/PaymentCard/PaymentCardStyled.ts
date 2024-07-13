import { styled, ButtonBase, Box } from '@mui/material';
import theme from '../../themes/default';

export const style = {
  p: 0,
  width: '100%',
  borderRadius: 2,
  border: '1px solid',
  borderColor: theme.palette.background.paper,
  backgroundColor: theme.palette.background.default,
};

function getBorderRadius(index: number, length: number) {
  if (length === 1) {
    return '5px';
  } if (index === 0) {
    return '5px 5px 0 0';
  } if (index === length - 1) {
    return '0 0 5px 5px';
  }
  return '0';
}

type ButtonStyledProps = {
  selected: number | null;
  customIndex: number;
  index: number;
  installmentOptionsLength: number;
};

export const ButtonStyled = styled(ButtonBase, {
  shouldForwardProp: (prop: string) => ![
    'customIndex', 'selected', 'index', 'installmentOptionsLength',
  ].includes(prop),
})<ButtonStyledProps>(({
  theme: localTheme, selected, customIndex, index, installmentOptionsLength,
}) => ({
  padding: '10px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  border: selected === customIndex ? '2px solid' : '1px solid',
  borderColor: selected === customIndex
    ? localTheme.palette.primary.main : localTheme.palette.background.paper,
  backgroundColor: selected === customIndex
    ? 'rgba(3, 214, 157, 0.1)' : localTheme.palette.background.default,
  borderRadius: getBorderRadius(index, installmentOptionsLength),
}));
