import { IAuth } from "../types"

export interface ICredentials {
  email: string,
  password: string
}

export interface AuthContextProps {
  auth: IAuth,
  login: (user: ICredentials) => void,
  logout: () => void,
}