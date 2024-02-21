import React, { useState } from 'react'
import { TableBody, TableCell, TableContainer, Table, TableHead, TableRow } from '@mui/material'

const Table2 = () => {
    var[fname,setfname]=useState([
    
        {"sname":"Hida","age":20},
        {"sname":"Neda","age":16},
        {"sname":"Zel","age":5},
    ])
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'blue'}}>Names</TableCell>
                        <TableCell style={{color:'blue'}}>Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {fname.map((value,index)=>{
                    return(
                    <TableRow>
                        <TableCell>{value.sname}</TableCell>
                        <TableCell>{value.age}</TableCell>
                    </TableRow>
                    )
})}
                </TableBody>            
            </Table>
        </TableContainer>
    </div>
  )
}

export default Table2