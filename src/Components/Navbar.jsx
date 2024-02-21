import { AppBar, Button, Toolbar,Typography, IconButton, MenuIcon} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div>
        <AppBar position="static">
            <Toolbar>
                <Typography sx={{flexGrow:1}} align='left' variant='h6'>FIRST APP</Typography> <br />
              <Button>
                <Link to='/' style={{color:'white'}}>Login</Link></Button>
              <Button>
                <Link to='/signup' style={{color:'white'}}>Signup</Link></Button>
              <Button>
                <Link to='/t' style={{color:'white'}}>Mapping</Link></Button>
              <Button>
                <Link to='/table2' style={{color:'white'}}>Table</Link></Button>
              <Button>
                <Link to='/table3' style={{color:'white'}}>Table2</Link></Button>
              <Button>
                <Link to='/grids' style={{color:'white'}}>Grid</Link></Button>
              <Button>
                <Link to='/card' style={{color:'white'}}>Card</Link></Button>
            </Toolbar>
        </AppBar>

    </div>
  )
}

export default Navbar