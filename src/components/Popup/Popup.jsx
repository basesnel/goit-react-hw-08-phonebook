import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export default function Popup(props) {
  const { title, children, openPopup, setOpenPopup } = props;

  return (
    <Dialog open={openPopup} fullWidth>
      <DialogTitle style={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <IconButton
          onClick={() => {
            setOpenPopup(false);
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ p: 2 }}>{children}</DialogContent>
    </Dialog>
  );
}
