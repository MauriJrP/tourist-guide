import React from 'react'
import { Stack, Card,  CardContent, Divider, Rating, Avatar } from '@mui/material';
import {IUser} from '../../types'
import {users} from '../../data'
import UpdateInfo from './components/UpdateInfo'

const user = users[0];

export default function ProfilePage() {
  return (
    <Card sx={{ minWidth: 275 }} className="drop-shadow-lg mb-2 m-2 md:w-96 mx-auto md:mt-10">
      <CardContent className="flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <Avatar src={user.photo} sx={{ width: 240, height: 240 }}/>
          <h2 className="mt-8 text-4xl">{user.name}</h2>
          <Divider className="my-2" variant="middle" flexItem/>
        </div>
          <div className="flex flex-col p-2">
            <p className="ml-2 text-gray-700">{user.email}</p>
            <p className="ml-2 text-gray-700">Correo: {user.age}</p>
            <p className="ml-2 text-gray-700">Edad: {user.gender}</p>
            <p className="ml-2 text-gray-700">Password: {user.password}</p>
            <p className="ml-2 text-gray-700">Rol: {user.role}</p>
          </div>
          <UpdateInfo user={user}/>
      </CardContent>
    </Card>
  )
}
