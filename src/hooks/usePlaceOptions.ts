import axios from 'axios';
import {useState, useEffect} from 'react';
import { ILocation, IPlaceType } from '../types';

export const usePlaceOptions = () => {
  const [placeTypes, setPlaceTypes] = useState<IPlaceType[]>([]);
  const [locations, setLocations] = useState<ILocation[]>([]);

  useEffect(() => {
    const urlPlaceTypes = `${process.env.REACT_APP_API_URL}/places/placeTypes`;
    const urlLocations = `${process.env.REACT_APP_API_URL}/places/locations`;
    const fetchData = async () => {
      const dataPlaceTypes = await (await axios.get(urlPlaceTypes)).data;
      setPlaceTypes(dataPlaceTypes);
      const dataLocations = await (await axios.get(urlLocations)).data;
      setLocations(dataLocations);
      // console.log(data);
    }
    
    fetchData();

  }, [])

  return {
    placeTypes,
    locations,
  }
}