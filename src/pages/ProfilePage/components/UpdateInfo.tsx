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
import {IconButton, Rating, TextField} from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import {IUser} from '../../../types';

interface IFormData {
  rating: number;
  comment: string;
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
    rating: 0,
    comment: '',
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

  const handleRatingChange = (event: React.SyntheticEvent<Element, Event>, newValue: number | null) => {
    if (newValue) {
    setformData((prevState: IFormData) => ({
      ...prevState,
      rating: newValue
    }));
  }
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
        <DialogTitle>{"Retroalimentación"}</DialogTitle>
        <DialogContent className="flex flex-col">
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
