// export interface IPlace {
//   id: number;
//   img: string;
//   title: string;
//   rating: number;
//   description: string;
// }

export interface IPlace {
  name: string;
  id: number;
  address: string;
  opening_hours: string;
  contact: string;
  manager?: string;
  photos: string[];
  price: number;
  rating: number;
  types?: string[];
  description?: string;
}

export interface IPlaceInfo {
  name: string;
  id: number;
  address: string;
  opening_hours: string;
  contact: string;
  cedula: string;
  manager?: string;
  photos: string[];
  price: number;
  rating: number;
  types?: string[];
  description?: string;
}

export interface IUserComment {
  name: string;
  photo: string;
}

export interface IComment {
  id: number;
  user: IUserComment;
  date: string;
  rating: number;
  comment: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  photo: string;
  password: string;
  role: string;
  age: number;
  gender: string;
}