import {Grid, TextField} from '@mui/material'
import { useState } from 'react';
import ImageUploader from '../../../components/ImageUploader'


export default function Gallery () {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleInputChange = () => {};

  return (
    <>
      <Grid item xs={12} sm={6} className="">
        <div className="border-2 border-dashed p-2">
          <TextField
              label="Nombre"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
            />
            <ImageUploader />
        </div>
      </Grid>
    </>
  )
}