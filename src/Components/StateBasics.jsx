import { TextField, Typography,Button } from '@mui/material';
import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react'

const StateBasics = () => {
    var [fname,setfname]=useState("Ayzal");
    var[val,setval]=useState();
    
    const handleInput=(e)=>{
        //console.log(e.target.value);
        setval(e.target.value);
        
    }
    const submitHandler=(e)=>{
        console.log("clicked");
        setfname(val);
    }
  return (
    <div>
        <Typography variant='h4'>Welcome {fname}</Typography><br></br>
       <TextField variant='outlined' onChange={handleInput}>{fname}</TextField><br /><br />
        <Button variant='contained' onClick={submitHandler}>submit</Button>
    </div>
  )
}

export default StateBasics