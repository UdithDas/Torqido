import { Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Numonic = () => {
    var [cname,setName]=useState("")
    const changeName=(event)=>{
        const{name,value}=event.target;
        setName(value);
    }
    useEffect(()=>{
        setName("[Enter name]")
    },[])
  return (
    <div>
      <Typography variant='h3' >My Name is {cname}</Typography>
      <br></br>
      <br></br>
      <TextField label='Enter name' variant='filled' onChange={(e)=>changeName(e)}></TextField>
      <br></br>
      <br></br>
      {/* <Button variant='contained' color='success' onClick={addname}>ADD NAME</Button> */}
    </div>
  )
}

export default Numonic
