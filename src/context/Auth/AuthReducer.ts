import { IAuth, IUser } from "../../types";

type AuthAction = 
  | {type: 'login', payload: IUser} 
  | {type: 'logout'}
  | {type: 'signup', payload: IUser}

export const AuthReducer = (state: IAuth, action: AuthAction ) => {
  switch (action.type) {
    case 'login':
      return {...state, loggedIn: true, user: action.payload};
    case 'logout':
      return {loggedIn: false};
    default:
      return state;
  }
}