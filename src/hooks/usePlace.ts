import {useContext} from 'react';
import { PlaceContext } from '../context/Place/PlaceContext';

export const usePlace = () => {

  return useContext(PlaceContext);
}