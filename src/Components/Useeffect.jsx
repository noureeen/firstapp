import { Button, Typography } from '@mui/material'
import React,{useState,useEffect} from 'react'

const Useeffect = () => {
    var[data,setdata]=useState()

const funcr=(e)=>{
    console.log("clicked")
    setdata("React")
}

const funca=(e)=>{
    console.log("clicked")
    setdata("Angular")
}

const funcn=(e)=>{
    console.log("clicked")
    setdata("Next")
}

useEffect(()=>{
    funca();
},[])

  return (
    <div>
        <Typography variant='h3'> Welcome to</Typography><br /><br />
        <Button variant='contained' onClick={funcr}>React</Button><br /><br />
        <Button variant='contained' onClick={funca}>Angular</Button><br /><br />
        <Button variant='contained' onClick={funcn}>Next</Button><br /><br />
    </div>
  )
}

export default Useeffect
