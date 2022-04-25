import React from 'react';
import { useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import {Box, Grid, TextField} from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import {IUser} from '../../../types';

interface IFormData {
  name: string;
  email: string;
  password: string;
}

interface IProps {
  user: IUser;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function UpdateInfo({user}: IProps) {
  const [open, setOpen] = React.useState(false);
  const [formData, setformData] = useState<IFormData>({
    name: '',
    email: '',
    password: '',
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setformData((prevState: IFormData) => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleClose()
    // console.log(formData)
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
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
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
        {/* <p>Valoración</p>
            <Rating
              name="simple-controlled"
              value={formData.rating}
              onChange={handleRatingChange}
            />
        <TextField
          label="Comentario"
          multiline
          rows={4}
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
          className="mt-3 w-72"
        /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" fullWidth className="mx-5 mb-2">Confirmar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
