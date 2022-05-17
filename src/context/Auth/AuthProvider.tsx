import axios from 'axios'
import { useReducer } from 'react'
import { IAuth, IUser } from '../../types'
import { ICredentials, INewUser } from '../types'
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
  const config = {
    headers: {
      'Content-type': 'application/json'
    }
  }

  const login = async(credentials: ICredentials) => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login`;
      const body = {...credentials}

      const data = await (await axios.post(url, body, config)).data[0];
      if (data.token) document.cookie = `token=${data.token}; max-age=${60*10}; path=/; samesite=strict`
      else return data.message;
  
      const user: IUser = {
        ...data.user,
        ...credentials,
      }
      
      dispatch({type: 'login', payload: user})
      return "";
      
    } catch (err: any) {
      return(err.response.data[0].message);
    }
  }

  const logout = () => {
    dispatch({type: "logout"})
  }

  const signup = async(newUser: INewUser) => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/signup`;
      const body = {...newUser}

      // console.log(await axios.post(url,body,config));
      const data = await (await axios.post(url, body, config)).data[0];
      return data.message;
      
    } catch (err: any) {
      return(err.response.data[0].message);
    }
  }
  
  return (
    <AuthContext.Provider value={{auth, login, logout, signup}} >
      {children}
    </AuthContext.Provider>
  )
}