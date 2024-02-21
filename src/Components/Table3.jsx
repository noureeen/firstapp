import React, { useState } from 'react'
import { TableBody,Button, TableCell,TextField, TableContainer, Table, TableHead, TableRow } from '@mui/material'


const Table3 = () => {
    var [names,setnames] = useState ([])      
  
    var [fname,setfname] = useState()

    const inputHandler =(e)=>{
        setnames([...names,fname])
        setfname('')
    }

    const submitHandler =(e)=>{
        setfname(e.target.value)
    }

  return (

    <div>
        <TextField variant='outlined' value={fname} onChange={submitHandler}></TextField> <br /> <br />
        <Button variant='contained' color='success' onClick={inputHandler}>Submit</Button>
         <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'blue'}}>Names</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {names.map((name,index)=>{
                    return(
                    <TableRow>
                        <TableCell>{name}</TableCell>
                    </TableRow>
                    )
})}
                </TableBody>            
            </Table>
        </TableContainer>

    </div>
  )
}

export default Table3