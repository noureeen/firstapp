import React, { useEffect, useState } from 'react'
import { TableBody,Button, TableCell, TextField, TableContainer, Table, TableHead, TableRow } from '@mui/material'
import axios from 'axios'

const Axios = () => {
  var[user,setuser]=useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
      console.log(response.data)
      setuser(response.data)
    })
  })
  return(
    <div>
      <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'blue'}}>Name</TableCell>
                        <TableCell style={{color:'blue'}}>Username</TableCell>
                        <TableCell style={{color:'blue'}}>City</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                      user.map((val,i)=>{
                          return(
                            <TableRow>
                              <TableCell>{val.name}</TableCell>
                              <TableCell>{val.username}</TableCell>
                              <TableCell>{val.address.city}</TableCell>
                            </TableRow>
                          )
                      
                      })
                    }
                </TableBody>            
            </Table>
        </TableContainer>
    </div>
  )
}

export default Axios