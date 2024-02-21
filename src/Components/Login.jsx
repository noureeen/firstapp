import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Login  page</h1>
      <form action="">
            Username 
                <input type="text"/> <br /><br /><br />
            Password
                <input type="password" name="password" id="password" /><br /><br />
        
                <input type="submit" name="submit"/>
      </form>

    <Typography variant="h1">
             Login
    </Typography><br /><br /><br />

    <TextField id="outlined" label="Enter" variant="outlined"/><br />
    <TextField id="filled" label="email" variant="filled"/><br />
    <TextField id="standard" label="password" variant="standard"/><br />

    <Button variant="text" >BUTTON</Button><br />
    <Button variant="contained">BUTTON</Button><br />
    <Button variant="outlined">Outlined</Button><br />

        
    </div>
  )
}

export default Login