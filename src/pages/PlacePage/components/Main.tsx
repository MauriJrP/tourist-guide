import { Stack, Card, IconButton, CardContent, Divider, Rating } from '@mui/material';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import {IPlace} from '../../../types'
import Rate from './Rate';
import {usePlace} from '../../../hooks/usePlace'

export default function Main() {
  const {place} = usePlace();
  // console.log(place.galleries[0].images[0]);

  return (
    <>
      <div className="rounded-t-sm bg-secondary p-3">
        <h2 className="text-2xl uppercase text-primary">{place.name}</h2>
      </div>
      <Divider orientation="horizontal"  flexItem className="my-2"/>
      <Card sx={{ minWidth: 275 }} className="drop-shadow-lg">
        <CardContent className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img src={`http://localhost:4000/${place.galleries[0].images[0]}`} alt={`Imagen de ${place.name}`} />
          </div>
          <div className="lg:w-1/2 p-3">
            <div className="flex justify-between items-center">
              <Rating
                name="read-only"
                value={place.rating}
                readOnly
              />
              <Stack direction="row" spacing={1}>
                {/* <IconButton aria-label="Mi Lista" onClick={()=>console.log("save")}>
                  <BookmarkAddIcon />
                </IconButton> */}
                <Rate />
              </Stack>
            </div>
            <p className="text-lg text-justify">{place.description?.slice(0, 500)}</p>
            <Divider orientation="horizontal"  flexItem className="my-1"/>
            <p className="text-lg">Dirección: {place.address}</p>
            <p className="text-lg">Precio: ${place.price}.00</p>
            <p className="text-lg">Horario: {place.openingHours}</p>
            <p className="text-lg">Telefono: {place.phone}</p>
          </div>
        </CardContent>
      </Card>
      {/* <div className="flex flex-col ">
        <div className="lg:w-1/2">
          <img src={place.photos[0]} alt={`Imagen de ${place.name}`} />
        </div>
      </div> */}
    </>
  )
}
