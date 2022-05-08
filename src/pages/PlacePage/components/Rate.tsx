import { useState, forwardRef, ReactElement, Ref } from 'react';
import {IconButton, Rating, TextField, Slide, DialogTitle, DialogContent, DialogActions, Dialog, Button} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import GradeIcon from '@mui/icons-material/Grade';
import {useForm} from '../../../hooks/useForm';

interface IFormData {
  rating: number;
  comment: string;
}

const initialState: IFormData = {
  rating: 0,
  comment: '',
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<any, any>;
  },
  ref: Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = useState(false);
  const {formData, handleInputChange, handleRatingChange} = useForm<IFormData>(initialState);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton aria-label="Calificar" onClick={handleClickOpen} >
        <GradeIcon />
      </IconButton>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        // keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Retroalimentación"}</DialogTitle>
        <DialogContent className="flex flex-col">
        <p>Valoración</p>
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
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" fullWidth className="mx-5 mb-2">Confirmar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
