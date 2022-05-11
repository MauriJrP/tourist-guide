import { useReducer } from "react";
import { IPlanCreation } from "../../types";
// import {  } from "../../types";
import { PlansContext } from "./PlansContext";
import { PlansReducer } from "./PlansReducer";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const initialState: IPlanCreation = {
  isAddingPlaces: false,
  places: [
    {placeId: 1, placeName: "Casa"},
    {placeId: 2, placeName: "Casa de"},
  ]
}

export const PlansProvider = ({children}: IProps) => {
  const [planCreation, dispatch] = useReducer(PlansReducer, initialState);

  const addPlaces = () => {
    dispatch({type: "addPlaces", payload: true});
  }

  const cancelAddPlaces = () => {
    dispatch({type: "addPlaces", payload: false});
  }

  const addPlace = (placeId: number, placeName: string) => {
    dispatch({type: 'addPlace', payload: {placeId, placeName}});
  }

  const removePlace = (placeId: number) => {
    dispatch({type: 'removePlace', payload: placeId});
  }

    return (
    <PlansContext.Provider value={{planCreation, addPlaces}} >
      {children}
    </PlansContext.Provider>
  )

}





// import { useReducer } from 'react'
// import { IAuth, IUser } from '../../types'
// import { ICredentials } from '../types'
// import {AuthContext} from './AuthContext'
// import { AuthReducer } from './AuthReducer'

// interface IProps {
//   children: JSX.Element | JSX.Element[]
// }

// const initialState: IAuth = {
//   loggedIn: true,
// }

// export const AuthProvider = ({children}: IProps) => {
//   const [auth, dispatch] = useReducer(AuthReducer, initialState);

//   const login = async(credentials: ICredentials) => {
//     // await query to database to get user
//     const user: IUser = {
//       id: 0,
//       name: '',
//       photo: '',
//       role: '',
//       age: 0,
//       gender: '',
//       ...credentials,
//     }
    
//     dispatch({type: 'login', payload: user})
//   }

//   const logout = () => {
//     dispatch({type: "logout"})
//   }
  
//   return (
//     <AuthContext.Provider value={{auth, login, logout}} >
//       {children}
//     </AuthContext.Provider>
//   )
// }