import { useState, FormEvent, forwardRef, ReactElement, Ref } from 'react';
import { useForm } from '../../../hooks/useForm';
import { Box, Grid, TextField, DialogActions, DialogContent, DialogTitle, Slide, Dialog, Button } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import { IUser } from '../../../types';

interface IFormData {
  name: string;
  email: string;
  password: string;
}

interface IProps {
  user: IUser;
}



const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function UpdateInfo({user}: IProps) {
  const [open, setOpen] = useState(false);
  const initialState: IFormData = {
    name: user.name,
    email: user.email,
    password: user.password,
  }
  const {formData, handleInputChange, handleSubmit} = useForm<IFormData>(initialState);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen} fullWidth>
        Actualizar información
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        // keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Información"}</DialogTitle>
        <DialogContent className="flex flex-col">
        <Box component="form" noValidate onSubmit={(e: FormEvent<HTMLFormElement>) => {handleSubmit(e); handleClose();}} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  label="Nombre(s)"
                  value={formData.name}
                  onChange={handleInputChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Correo electrónico"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" fullWidth className="mx-5 mb-2">Confirmar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
