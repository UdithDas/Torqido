import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

function Micro() {
    var pname=[{From:"Nirmala",Days:4,Destination:"Goa"},{From:"Fisat",Days:6,Destination:"Hydrabad"},{From:"Christ",Days:10,Destination:"Manali"},{From:"St Joseph",Days:3,Destination:"Bangalore"}]
  return (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell>From</TableCell>
                <TableCell>Days</TableCell>
                <TableCell>Destination</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {pname.map((value,index)=>{
                    return <TableRow>
                        <TableCell key={index}>{value.From}</TableCell>
                        <TableCell key={index}>{value.Days}</TableCell>
                        <TableCell key={index}>{value.Destination}</TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default Micro
