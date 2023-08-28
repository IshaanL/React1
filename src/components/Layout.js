import React from 'react'
import {Stack} from '@mui/material'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'


export default function Layout() {
  return (
    <>
    <Navbar/>
    <Stack direction="row" spacing={2} justifyContent="space-between">
    <Sidebar/>
    <Outlet/>
    
    
    </Stack>
    
    </>
  )
}
