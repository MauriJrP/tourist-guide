import { MenuItem, Rating, TextField, Grid, Button } from '@mui/material';
import { useState } from 'react';
import {placeTypes as types, locations} from '../../../data'

interface IFormData {
  type?: string;
  location?: string;
  price?: number;
  rating?: number;
}

export default function Searcher() {
  const [formData, setformData] = useState<IFormData>({
    type: '',
    location: '',
    price: undefined,
    rating: 0,
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setformData((prevState: IFormData) => ({
      ...prevState,
      [name]: name === "price" || name === "rating" ? parseInt(value) : value
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.currentTarget);
  };

  const getValueText = (value: number) => {
    return `valor${value}`;
  }

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
            label="Máximo"
            value={formData.price}
            onChange={handleInputChange}
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