import React, { useState , useEffect} from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import {Typography,TextField,Button} from '@mui/material';



import {TableContainer,Table,TableHead,TableBody,TableRow,TableCell,Paper} from '@mui/material';

export default function Create() {
    const[users,SetUsers]=useState([])

  useEffect(()=>{
    axios.get("https://reqres.in/api/users/")
    .then((response)=>{
      console.log(response)
      SetUsers(response.data.data)
    })
  },[])
  
    const data = {
        first_name: "",
        email: "",
        last_name:""
    };
    const [inputData,setInputdata]= useState(data)

    const handleData = (e)=>{
        setInputdata({...inputData, [e.target.name]:e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post("https://reqres.in/api/users", inputData);
        SetUsers([inputData,...users])
        
    }
    
  return (
    <>
    <TableContainer component={Paper} sx={{ width: '85%' }} >
        <Table>
          <TableHead>
            <TableRow>
              
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
                    <TableCell>{el.first_name}</TableCell>
                    <TableCell>{el.last_name}</TableCell>
                    <TableCell>{el.email}</TableCell>
                    
                  </TableRow>
                  
                  </>
                  
                )
              })
            }
            
          </TableBody>
        </Table>
    </TableContainer>
    <Box sx={{ bgcolor: '#eeeeee', height: '50vh' }} flex={6} p={{ xs: 0, md: 4 }} component="form" >
    <Typography variant="h3" gutterBottom align='center'>
    Create A User
    </Typography>
    <Typography variant='h5' padding={2}>First Name : 
    <TextField id="outlined-basic" label="Enter" variant="outlined" size='small' onChange={handleData} value={inputData.first_name} name='first_name'/>
    </Typography>
    <Typography variant='h5' padding={2}>Last Name : 
    <TextField id="outlined-basic" label="Enter" variant="outlined" size='small' onChange={handleData} value={inputData.last_name} name='last_name'/>
    </Typography>
    <Typography variant='h5' padding={2} >Email : 
    <TextField sx={{ml:7}} id="outlined-basic" variant="outlined" size='small' label="Enter" onChange={handleData} value={inputData.email} name='email'/>
    </Typography>
    <Button variant="contained" sx={{ml:35}} onClick={handleSubmit}>Submit</Button>
    </Box>
    </>

  )
}
