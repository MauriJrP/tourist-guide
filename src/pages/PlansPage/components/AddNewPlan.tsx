import React from 'react'
import { Button, TextField, Grid } from "@mui/material";
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import {useNavigate} from 'react-router-dom'
import {usePlanCreation} from '../../../hooks/usePlanCreation'

export default function AddNewPlan() {
  const [value, setValue] = React.useState<Date | null>(null);
  const {planCreation, addPlaces} = usePlanCreation();

  const navigate = useNavigate();

  const handleAddPlaces = () => {
    addPlaces();
    console.log(planCreation.isAddingPlaces);
    navigate('/home')
  }
  
  return (
    <>
      <TextField label="Nombre" variant="outlined" fullWidth/>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid container spacing={2} className="mt-1">
            <Grid item xs={6}>
              <DatePicker
              label="Inicio"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
              />
            </Grid>
            <Grid item xs={6}>
              <DatePicker
              label="Fin"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
              />
            </Grid>
          </Grid>
        </LocalizationProvider>

      <div className="flex flex-col p-2 mt-4 drop-shadow-sm border-2">
        <div className="flex flex-col  mb-3 p-2">
          <ul className="flex flex-col gap-2">
            <li className="border-ternary border-2 bg-secondary text-white rounded-sm p-2 text-center">Place 1</li>
            <li className="border-ternary border-2 bg-secondary text-white rounded-sm p-2 text-center">Place 1</li>
          </ul>
        </div>
        <Button variant="contained" onClick={handleAddPlaces}>Agregar Lugares</Button>
      </div>
      <Button variant="contained" fullWidth onClick={handleAddPlaces} className="mt-4">Crear Plan</Button>
    </>
  )
}
