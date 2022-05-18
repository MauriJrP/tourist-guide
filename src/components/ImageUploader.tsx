import { Button, ImageList } from "@mui/material";
import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import {IoIosCloseCircle} from 'react-icons/io'
import axios from 'axios'

export default function ImageUploader() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    // console.log("test")
    // console.log( imageList)
    setImages(imageList as never[]);
    if (images.length === 1)
      console.log(images[0].file);
    // console.log(images);
  };

  const upload = async () => {
    const url = `${process.env.REACT_APP_API_URL}/places/create`;
    const config = {
      // headers: {
      //   'Content-type': 'application/json'
      // }
    }
    // const body = images[0].file;

    // const data = await (await axios.post(url, body)).data[0];
    // console.log(data);
  }

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          <div className="upload__image-wrapper">
            {imageList.map((image, index) => (
              <div key={index} className="image-item relative w-max p-4">
                <img src={image.dataURL} alt="" width="100" className="" />
                <IoIosCloseCircle className=" text-red-600 cursor-pointer text-xl absolute top-0 right-0" onClick={() => onImageRemove(index)}/>
              </div>
            ))}
            <Button 
              variant="contained" 
              style={isDragging ? { color: "red" } : undefined}
              onClick={onImageUpload}
              {...dragProps}>
              Click o Arrastra aqui
            </Button>
            <Button variant="contained" color="error" onClick={onImageRemoveAll}>Eliminar todas las imagenes</Button>
            <Button variant="contained" color="error" onClick={upload}>Subir</Button>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
