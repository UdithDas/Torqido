import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Shazz = () => {
var[Inputname,setInputname]=useState({
    fname:"",
    lname:''
})
    const inputHandler =(e)=>{
        const{name,value}=e.target;
        setInputname({...Inputname,[name]:value})
    }
  return (
    <div>
        <Typography variant='h4'>First Name is {Inputname.fname} </Typography><br></br>
        <TextField label='first name' variant='outlined' name='fname' value={Inputname.fname} onChange={inputHandler}/><br></br>
        <br></br>
        <Typography variant='h4'>Second Name is {Inputname.lname}</Typography><br></br>
        <TextField label='Second Name' variant='outlined' name='lname' value={Inputname.lname} onChange={inputHandler}/><br></br>
            </div>
  )
}

export default Shazz

