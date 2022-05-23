import axios from 'axios';
import {IPlace, IComment} from '../../types'
import { PlaceContext } from './PlaceContext';
import { PlaceReducer } from './PlaceReducer';
import { useReducer, useState } from 'react'


interface IProps {
  children: JSX.Element | JSX.Element[];
}

const initialState: IPlace = {
  idPlace: 0,
  name: '',
  address: '',
  phone: '',
  openingHours: '',
  price: 0,
  rating: 0,
  placeType: '',
  location: '',
  description: '',
  galleries: []
}

export const PlaceProvider = ({children}: IProps) => {
  const [place, dispatch] = useReducer(PlaceReducer, initialState);
  const [comments, setComments] = useState<IComment[]>([]);

  const loadPlace = async (idPlace: string) => {
    const urlPlaces = `${process.env.REACT_APP_API_URL}/places/place/${idPlace}`;
    const placeData = await (await axios.get(urlPlaces)).data[0];
    // console.log(placeData.galleries[0].images[0].photo);
    dispatch({type: 'setPlace', payload: placeData});


    // console.log(placesData);
  }

  return (
    <PlaceContext.Provider value={{place, loadPlace, comments}} >
      {children}
    </PlaceContext.Provider>
  )
}