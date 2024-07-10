import { Box } from '@mui/material';
import logo from '../../assets/logo.svg';

function Header() {
  return (
    <Box
      sx={ {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px 0',
      } }
    >
      <img src={ logo } alt="woovi-logo" />
    </Box>
  );
}

export default Header;
