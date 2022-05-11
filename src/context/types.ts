import { IAuth, IPlanCreation } from "../types"

export interface ICredentials {
  email: string,
  password: string
}

export interface AuthContextProps {
  auth: IAuth,
  login: (user: ICredentials) => void,
  logout: () => void,
}


export interface PlansContextProps {
  planCreation: IPlanCreation;
  addPlaces: () => void;
}