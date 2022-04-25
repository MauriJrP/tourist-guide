import {IPlace, IComment, IUser} from './types';

export const places: IPlace[] = [
  {
    id: 1,
    name: 'Casa de la Cultura',
    address: 'Calle de la Cultura, 7, 28015, Madrid',
    opening_hours: '10:00 - 20:30',
    contact: '958245983',
    manager: 'Juan Carlos',
    photos: [
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhicarquitectura.com%2Fwp-content%2Fuploads%2F2012%2F12%2FCasa-de-cultura-i-biblioteca_1.jpg&f=1&nofb=1",
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhicarquitectura.com%2Fwp-content%2Fuploads%2F2012%2F12%2FCasa-de-cultura-i-biblioteca_1.jpg&f=1&nofb=1",
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhicarquitectura.com%2Fwp-content%2Fuploads%2F2012%2F12%2FCasa-de-cultura-i-biblioteca_1.jpg&f=1&nofb=1",
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhicarquitectura.com%2Fwp-content%2Fuploads%2F2012%2F12%2FCasa-de-cultura-i-biblioteca_1.jpg&f=1&nofb=1",
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhicarquitectura.com%2Fwp-content%2Fuploads%2F2012%2F12%2FCasa-de-cultura-i-biblioteca_1.jpg&f=1&nofb=1",
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhicarquitectura.com%2Fwp-content%2Fuploads%2F2012%2F12%2FCasa-de-cultura-i-biblioteca_1.jpg&f=1&nofb=1"],
    price: 0,
    rating: 4,
    types: ['Cultura', 'Arte', 'Concierto'],
    description: 'Casa de la Cultura es una de las casas de cultura más importantes de la ciudad de Madrid. Fue fundada en 1892 por el arquitecto y diseñador francés Antoine de Saint-Exupéry, y actualmente es el museo de la cultura de la ciudad. La casa de la cultura es uno de los principales centros culturales de la ciudad, y es uno de los lugares más visitados de la ciudad. La casa de la cultura es uno de los principales centros culturales de la ciudad, y es uno de los lugares más visitados de la ciudad.'
  },
  {
    id: 2,
    name: 'Casa de la Cultura',
    address: 'Calle de la Cultura, 7, 28015, Madrid',
    opening_hours: '10:00 - 20:30',
    contact: '958245983',
    manager: 'Juan Carlos',
    photos: [
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhicarquitectura.com%2Fwp-content%2Fuploads%2F2012%2F12%2FCasa-de-cultura-i-biblioteca_1.jpg&f=1&nofb=1",
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhicarquitectura.com%2Fwp-content%2Fuploads%2F2012%2F12%2FCasa-de-cultura-i-biblioteca_1.jpg&f=1&nofb=1",
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhicarquitectura.com%2Fwp-content%2Fuploads%2F2012%2F12%2FCasa-de-cultura-i-biblioteca_1.jpg&f=1&nofb=1"],
    price: 0,
    rating: 4,
    types: ['Cultura', 'Arte', 'Concierto'],
    description: 'Casa de la Cultura es una de las casas de cultura más importantes de la ciudad de Madrid. Fue fundada en 1892 por el arquitecto y diseñador francés Antoine de Saint-Exupéry, y actualmente es el museo de la cultura de la ciudad. La casa de la cultura es uno de los principales centros culturales de la ciudad, y es uno de los lugares más visitados de la ciudad. La casa de la cultura es uno de los principales centros culturales de la ciudad, y es uno de los lugares más visitados de la ciudad.'
  },
  {
    id: 3,
    name: 'Casa de la Cultura',
    address: 'Calle de la Cultura, 7, 28015, Madrid',
    opening_hours: '10:00 - 20:30',
    contact: '958245983',
    manager: 'Juan Carlos',
    photos: [
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhicarquitectura.com%2Fwp-content%2Fuploads%2F2012%2F12%2FCasa-de-cultura-i-biblioteca_1.jpg&f=1&nofb=1",
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhicarquitectura.com%2Fwp-content%2Fuploads%2F2012%2F12%2FCasa-de-cultura-i-biblioteca_1.jpg&f=1&nofb=1",
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhicarquitectura.com%2Fwp-content%2Fuploads%2F2012%2F12%2FCasa-de-cultura-i-biblioteca_1.jpg&f=1&nofb=1"],
    price: 0,
    rating: 4,
    types: ['Cultura', 'Arte', 'Concierto'],
    description: 'Casa de la Cultura es una de las casas de cultura más importantes de la ciudad de Madrid. Fue fundada en 1892 por el arquitecto y diseñador francés Antoine de Saint-Exupéry, y actualmente es el museo de la cultura de la ciudad. La casa de la cultura es uno de los principales centros culturales de la ciudad, y es uno de los lugares más visitados de la ciudad. La casa de la cultura es uno de los principales centros culturales de la ciudad, y es uno de los lugares más visitados de la ciudad.'
  },
  {
    id: 4,
    name: 'Casa de la Cultura',
    address: 'Calle de la Cultura, 7, 28015, Madrid',
    opening_hours: '10:00 - 20:30',
    contact: '958245983',
    manager: 'Juan Carlos',
    photos: [
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhicarquitectura.com%2Fwp-content%2Fuploads%2F2012%2F12%2FCasa-de-cultura-i-biblioteca_1.jpg&f=1&nofb=1",
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhicarquitectura.com%2Fwp-content%2Fuploads%2F2012%2F12%2FCasa-de-cultura-i-biblioteca_1.jpg&f=1&nofb=1",
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhicarquitectura.com%2Fwp-content%2Fuploads%2F2012%2F12%2FCasa-de-cultura-i-biblioteca_1.jpg&f=1&nofb=1"],
    price: 0,
    rating: 4,
    types: ['Cultura', 'Arte', 'Concierto'],
    description: 'Casa de la Cultura es una de las casas de cultura más importantes de la ciudad de Madrid. Fue fundada en 1892 por el arquitecto y diseñador francés Antoine de Saint-Exupéry, y actualmente es el museo de la cultura de la ciudad. La casa de la cultura es uno de los principales centros culturales de la ciudad, y es uno de los lugares más visitados de la ciudad. La casa de la cultura es uno de los principales centros culturales de la ciudad, y es uno de los lugares más visitados de la ciudad.'
  },
]

export const comments: IComment[] = [
  {
    id: 1,
    user: {
      name: 'Juan Carlos',
      photo: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhicarquitectura.com%2Fwp-content%2Fuploads%2F2012%2F12%2FCasa-de-cultura-i-biblioteca_1.jpg&f=1&nofb=1'
    },
    date: '20/10/2019',
    rating: 4,
    comment: 'Casa de la Cultura es una de las casas de cultura más importantes de la ciudad de Madrid. Fue fundada en 1892 por el arquitecto y diseñador francés Antoine de Saint-Exupéry, y actualmente es el museo de la cultura de la ciudad. La casa de la cultura es uno de los principales centros culturales de la ciudad, y es uno de los lugares más visitados de la ciudad. La casa de la cultura es uno de los principales centros culturales de la ciudad, y es uno de los lugares más visitados de la ciudad.'
  },
  {
    id: 2,
    user: {
      name: 'Juan Carlos',
      photo: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhicarquitectura.com%2Fwp-content%2Fuploads%2F2012%2F12%2FCasa-de-cultura-i-biblioteca_1.jpg&f=1&nofb=1'
    },
    date: '20/10/2019',
    rating: 3,
    comment: 'Casa de la Cultura es una de las casas de cultura más importantes de la ciudad de Madrid. Fue fundada en 1892 por el arquitecto y diseñador francés Antoine de Saint-Exupéry, y actualmente es el museo de la cultura de la ciudad. La casa de la cultura es uno de los principales centros culturales de la ciudad, y es uno de los lugares más visitados de la ciudad. La casa de la cultura es uno de los principales centros culturales de la ciudad, y es uno de los lugares más visitados de la ciudad.'
  }
]

export const users: IUser[] = [
  {
    id: 1,
    name: 'Juan Carlos',
    email: 'juancarlos@gmail.com',
    password: '123456',
    photo: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhicarquitectura.com%2Fwp-content%2Fuploads%2F2012%2F12%2FCasa-de-cultura-i-biblioteca_1.jpg&f=1&nofb=1',
    role: 'User',
    gender: 'Hombre',
    age: 18
  },
  {
    id: 2,
    name: 'Juan Carlos',
    email: 'juancarlos@gmail.com',
    password: '123456',
    photo: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fhicarquitectura.com%2Fwp-content%2Fuploads%2F2012%2F12%2FCasa-de-cultura-i-biblioteca_1.jpg&f=1&nofb=1',
    role: 'User',
    gender: 'Hombre',
    age: 18
  },
]