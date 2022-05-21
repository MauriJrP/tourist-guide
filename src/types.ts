// export interface IPlace {
//   id: number;
//   img: string;
//   title: string;
//   rating: number;
//   description: string;
// }

export interface IPlace {
  id: number;
  name: string;
  address: string;
  phone: string;
  opening_hours: string;
  manager?: string;
  // photos: string[];
  price: number;
  rating: number;
  placeType: string;
  location: string;
  description: string;
}

export interface IPlaceType {
  idPlaceType: number;
  placeType: string
}

export interface ILocation {
  idLocation: number;
  location: string;
}

export interface IGallery {
  name: string;
  images: never[];
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
  // photo: string;
  password: string;
  role: string;
  age: number;
  gender: string;
  muted: boolean;
}

export interface IAuth {
  loggedIn: boolean;
  user?: IUser;
}

export interface IPlanCreation {
  isAddingPlaces: boolean;
  places: {
      placeId: number;
      placeName: string;
  }[];
}