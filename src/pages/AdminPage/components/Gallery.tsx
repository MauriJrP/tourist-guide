import {Grid, TextField} from '@mui/material'
import { useState, ChangeEvent } from 'react';
import ImageUploader from '../../../components/ImageUploader'
import {IGallery} from '../../../types'

interface formData {
  name: string;
  images: never[];
}

interface IProps {
  gallery: IGallery;
  setGallery: (gallery: IGallery) => void;
}

export default function Gallery ({gallery, setGallery}: IProps) {

  const setImages = (images: never[]) => {
    setGallery({
      ...gallery,
      images,
    });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setGallery({
      ...gallery,
      name: e.target.value,
    });
  };

  return (
    <>
      <Grid item xs={12} sm={6} className="pt-6">
        <div className="border-2 border-dashed p-2 flex flex-col gap-2">
          <TextField
              label="Nombre de Galería"
              name="name"
              value={gallery.name}
              onChange={handleInputChange}
              fullWidth
            />
            <ImageUploader images={gallery.images} setImages={setImages}/>
        </div>
      </Grid>
    </>
  )
}