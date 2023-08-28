import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import {Typography,ListItemAvatar, Avatar} from '@mui/material';
import { useParams } from 'react-router-dom';


export default function UserProfile() {

    const[user,SetUser]=useState([])
  
    const params = useParams();
  




  

  useEffect(()=>{
    axios.get(`https://reqres.in/api/users/${params.id}`)
    .then((response)=>{
      console.log(response)
      SetUser(response.data.data)
    })
  },[])


  return (
    
        <Box sx={{ bgcolor: '#eeeeee', height: '50vh' }} flex={6} p={{ xs: 0, md: 4 }}>
           <Typography variant="h3" gutterBottom align='center'>
        Profile
      </Typography>
      <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={`https://reqres.in/img/faces/${user.id}-image.jpg`} sx={{ width: 100, height: 100 }}/>
              </ListItemAvatar>
      <Typography variant='h5' padding={2}>First Name: {user.first_name}
      </Typography>
      <Typography variant='h5' padding={2}>Last Name: {user.last_name} </Typography>
      <Typography variant='h5' padding={2}>Email: {user.email}</Typography>
        </Box>
         
      
    
  )
}
