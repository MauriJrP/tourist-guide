import {createContext} from 'react'
import {PlaceContextProps} from '../types'

export const PlaceContext = createContext<PlaceContextProps>({} as PlaceContextProps);