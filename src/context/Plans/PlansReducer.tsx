import { places } from "../../data";
import { IPlanCreation, IUser } from "../../types";

interface IPlaceInfo {
  placeId: number,
  placeName: string
}

type PlanCreation = 
  | {type: 'addPlaces', payload: boolean} 
  | {type: 'addPlace', payload: IPlaceInfo}
  | {type: 'removePlace', payload: number}

export const PlansReducer = (state: IPlanCreation, action: PlanCreation ) => {
  switch (action.type) {
    case 'addPlaces':
      return {...state, isAddingPlaces: action.payload};
    case 'addPlace':
      return {...state};
    case 'removePlace':
      return {...state, places: state.places.filter(({placeId}, payload) => placeId !== payload)}
    default:
      return state;
  }
}