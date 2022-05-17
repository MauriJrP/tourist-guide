import { MenuItem, Rating, TextField, Grid, Button } from '@mui/material';
import { ChangeEvent } from 'react';
import {placeTypes as types, locations} from '../../../data'
import {useForm} from '../../../hooks/useForm';

interface IFormData {
  type?: string;
  location?: string;
  price?: number;
  rating?: number;
}

const initialState: IFormData = {
  type: '',
  location: '',
  price: 0,
  rating: 0,
}

export default function Searcher() {
  const {formData, handleInputChange, handleRatingChange, handleSubmit} = useForm<IFormData>(initialState);

  return (
    <form onSubmit={handleSubmit}  >
      <TextField
        select
        label="Tipo de lugar"
        name="type"
        value={formData.type}
        onChange={handleInputChange}
        fullWidth
      >
        {types.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        label="Ubicación"
        name="location"
        value={formData.location}
        onChange={handleInputChange}
        fullWidth
        className="mt-3"
      >
        {locations.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            name="price"
            className="mt-3"
            fullWidth
            label="Precio Máximo"
            value={formData.price}
            onChange={(e:ChangeEvent<HTMLInputElement>)=> handleInputChange(e, 'number')}
            type="number"
          />
        </Grid>
        <Grid item xs={6}>
          <div className="mt-3 px-2">
            <p>Valoración</p>
            <Rating
              name="simple-controlled"
              value={formData.rating}
              onChange={handleRatingChange}
            />
          </div>
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" color="primary" className="mt-3" fullWidth>
        Buscar
      </Button>
    </form>
  )
}