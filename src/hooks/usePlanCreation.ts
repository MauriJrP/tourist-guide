import {useContext} from 'react';
import { PlansContext } from '../context/Plans/PlansContext';

export const usePlanCreation = () => {

  return useContext(PlansContext);
}