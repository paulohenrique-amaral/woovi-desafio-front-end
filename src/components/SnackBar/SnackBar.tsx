import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

type SnackBarProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

function SnackBar({ open, setOpen }: SnackBarProps) {
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar open={ open } autoHideDuration={ 2000 } onClose={ handleClose }>
        <Alert
          onClose={ handleClose }
          severity="success"
          variant="filled"
          sx={ { width: '100%' } }
        >
          Codigo Pix Copiado
        </Alert>
      </Snackbar>
    </div>
  );
}

export default SnackBar;
