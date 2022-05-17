import { IAuth, IPlanCreation } from "../types"

export interface ICredentials {
  email: string,
  password: string
}

export interface INewUser {
  name: string,
  email: string,
  password: string,
  gender: string,
  age: number
}

export interface AuthContextProps {
  auth: IAuth,
  login: (user: ICredentials) => Promise<string>,
  logout: () => void,
  signup: (user: INewUser) => Promise<string>,
}


export interface PlansContextProps {
  planCreation: IPlanCreation;
  addPlaces: () => void;
}