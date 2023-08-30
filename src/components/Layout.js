import React from 'react'
import {Stack} from '@mui/material'

import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'


export default function Layout() {
  return (
    <>
    <Navbar/>
    <Stack direction="column" spacing={2} justifyContent="space-between">
    
    <Outlet/>
    
    
    </Stack>
    
    </>
  )
}
