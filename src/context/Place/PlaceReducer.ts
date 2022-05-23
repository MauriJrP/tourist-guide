import {IPlace} from '../../types'

type PlaceAction = 
  | {type: 'setPlace', payload: IPlace}
  | {type: 'deletePlace', payload: number}
  | {type: 'reportPlace', payload: number}

export const PlaceReducer = (state: IPlace, action: PlaceAction) => {
  switch(action.type) {
    case 'setPlace':
      return action.payload;
    default:
      return state;
  }
}