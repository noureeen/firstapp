import { TableBody, TableCell, TableContainer, Table, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Mapping = () => {
    var[names,setnames]=useState(["Hida","Neda","Zel"])
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'red'}}>Names</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {names.map((value,index)=>{
                    return(
                    <TableRow>
                        <TableCell>{value}</TableCell>
                    </TableRow>
                    )
})}
                </TableBody>            
            </Table>
        </TableContainer>
    </div>
  )
}

export default Mapping