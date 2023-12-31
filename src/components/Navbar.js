import React, { Component } from 'react'
import { AppBar, Stack, Toolbar, Typography,Button } from '@mui/material'

export default class Navbar extends Component {
  render() {
    return (
      <AppBar position='static' color='default'>
        <Toolbar >
          <Stack direction='row' spacing={2}>
          <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <Button variant="text" href='/' color='inherit' >Home</Button>
            <Button variant="text" href='/Create' color='inherit' >Create</Button>
            

            
          </Stack>
        </Toolbar>
      </AppBar>
    )
  }
}
