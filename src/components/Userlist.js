import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react'

import {Link} from '@mui/material';
import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper} from '@mui/material';




export default function Userlist() {

  const[users,SetUsers]=useState([])

  useEffect(()=>{
    axios.get("https://reqres.in/api/users/")
    .then((response)=>{
      console.log(response)
      SetUsers(response.data.data)
    })
  },[])

  return (
    
    <TableContainer component={Paper} sx={{ width: '85%' }} >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
            
          </TableHead>
          <TableBody>
          
            {
              users.map((el)=>{
                return(
                  <>
                  
                  <TableRow>
                    
                    <TableCell><Link href={`users/${el.id}`} underline='none' color="inherit">{el.id}</Link></TableCell>
                    <TableCell><Link href={`users/${el.id}`} underline='none' color="inherit">{el.first_name}</Link></TableCell>
                    <TableCell><Link href={`users/${el.id}`} underline='none' color="inherit">{el.last_name}</Link></TableCell>
                    <TableCell><Link href={`users/${el.id}`} underline='none' color="inherit">{el.email}</Link></TableCell>
                    
                  </TableRow>
                  
                  </>
                  
                )
              })
            }
            
          </TableBody>
        </Table>
    </TableContainer>
    
  )
}
