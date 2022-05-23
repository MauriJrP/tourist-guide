import React from 'react'
import {ButtonGroup, Button} from '@mui/material'
import {Outlet, NavLink} from 'react-router-dom'

export default function AdminPage() {
  return (
    <div className="bg-white container mx-auto p-2 md:p-10 flex flex-col items-center gap-5">
      <ButtonGroup variant="text" aria-label="text button group">
        <Button>
          <NavLink to="add-place" className={({ isActive }) => isActive ? 'text-black ' : 'hover:text-gray-500'}>Agregar Lugar</NavLink>
        </Button>
        {/* <Button>
          <NavLink to="update-place" className={({ isActive }) => isActive ? 'text-black ' : 'hover:text-gray-500'}>Actualizar Lugar</NavLink>
        </Button>
        <Button>
          <NavLink to="remove-place" className={({ isActive }) => isActive ? 'text-black ' : 'hover:text-gray-500'}>Eliminar Lugar</NavLink>
        </Button>
        <Button>
          <NavLink to="user-sanction" className={({ isActive }) => isActive ? 'text-black ' : 'hover:text-gray-500'}>Sancionar Usuario</NavLink>
        </Button> */}
      </ButtonGroup>

      <Outlet />
    </div>
  )
}
