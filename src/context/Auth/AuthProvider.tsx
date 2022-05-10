import { useReducer } from 'react'
import { IAuth, IUser } from '../../types'
import { ICredentials } from '../types'
import {AuthContext} from './AuthContext'
import { AuthReducer } from './AuthReducer'

interface IProps {
  children: JSX.Element | JSX.Element[]
}

const initialState: IAuth = {
  loggedIn: false,
}

export const AuthProvider = ({children}: IProps) => {
  const [auth, dispatch] = useReducer(AuthReducer, initialState);

  const login = async(credentials: ICredentials) => {
    // await query to database to get user
    const user: IUser = {
      id: 0,
      name: '',
      photo: '',
      role: '',
      age: 0,
      gender: '',
      ...credentials,
    }
    
    dispatch({type: 'login', payload: user})
  }

  const logout = () => {
    dispatch({type: "logout"})
  }
  
  return (
    <AuthContext.Provider value={{auth, login, logout}} >
      {children}
    </AuthContext.Provider>
  )
}