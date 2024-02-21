import { Button, TextField, Typography} from '@mui/material'
import React, {useState} from 'react'

const Signup = () => {
     var[email,setemail]=useState()

     const inputHandler =(e)=>{
        
        setemail({...email,[e.target.name] : e.target.value})
        console.log(email)
    }
  return (
    <div>
        <Typography variant='h3'> Sign Up </Typography> <br />
        <TextField id='outlined' label='Username' variant='outlined' name='username' onChange={inputHandler} ></TextField><br /><br />
        <TextField id='outlined' label='Password' variant='outlined' name='password' onChange={inputHandler}></TextField><br /><br />
        <TextField id='outlined' label='Email' variant='outlined' name='email' onChange={inputHandler}></TextField><br /><br />
        <TextField id='outlined' label='Phone' variant='outlined' name='phone' onChange={inputHandler}></TextField><br /><br /><br />

        <Button variant='contained'>submit</Button>

    </div>
  )
}

export default Signup