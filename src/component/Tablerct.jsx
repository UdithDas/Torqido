import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

function Tablerct() {
    var cname=[{name:"Adul",age:18,place:"Parappukara"},{name:"Mrudhula",age:19,place:"Kalpetta"},{name:"Deepak",age:20,place:"Veloor "}]
  return (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Place</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {cname.map((value,index)=>{
                    return <TableRow>
                        <TableCell key={index}>{value.name}</TableCell>
                        <TableCell key={index}>{value.age}</TableCell>
                        <TableCell key={index}>{value.place}</TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default Tablerct
