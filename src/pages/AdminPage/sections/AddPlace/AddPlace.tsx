import {FormEvent, ChangeEvent} from 'react';
import {Box, Grid, Button, TextField, MenuItem} from '@mui/material';
import {placeTypes} from '../../../../data';
import {useForm} from '../../../../hooks/useForm';

interface IFormData {
  name: string;
  address: string;
  openingHours: string;
  contact: string;
  cedula: string;
  manager?: string;
  price: number;
  adminCode: string;
  placeType: string;
  description: string;
  photos: string[];
}

const initialState = {
  name: '',
  address: '',
  openingHours: '',
  contact: '',
  cedula: '',
  manager: '',
  price: 0,
  adminCode: '',
  placeType: '',
  description: '',
  photos: [],
}

export default function AddPlace() {
  const {formData, handleInputChange, handleSubmit} = useForm<IFormData>(initialState);

  return (
    <>
      <Box component="form"  onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e, '/home')} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={4}>
                <TextField
                  name="name"
                  required
                  fullWidth
                  label="Nombre"
                  value={formData.name}
                  onChange={handleInputChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  label="Dirección"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  label="Cedula"
                  name="cedula"
                  value={formData.cedula}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  label="Horario"
                  name="openingHours"
                  value={formData.openingHours}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  label="Contacto"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Gerente"
                  name="manager"
                  value={formData.manager}
                  onChange={handleInputChange}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="adminCode"
                  label="Código de administrador"
                  type="password"
                  value={formData.adminCode}
                  onChange={handleInputChange}
                />
              </Grid> */}
              <Grid item xs={12} sm={6}>
                <TextField
                select
                label="Tipo de lugar"
                name="placeType"
                value={formData.placeType}
                onChange={handleInputChange}
                fullWidth
              >
                {placeTypes.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="price"
                  fullWidth
                  label="Costo"
                  value={formData.price}
                  onChange={(e:ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'number')}
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Descripción"
                  multiline
                  rows={4}
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Agregar Lugar
            </Button>
      </Box>
    </>
  )
}

// Nombre -------
// Direccion -------
// Horario -------
// Contacto -------
// Cedula -------
// Gerente -------
// Precio -------
// Codigo de administrador -------
// Tipos -------
// Descripcion -------
// Fotos
