import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Sim = () => {
    var[page,setpage]=useState("Home")
    const homename=()=>{
        setpage("Home page")
    }
    const change=()=>{ 
        setpage("Gallery")
    }
    const change2=()=>{
        setpage("Contact page")
    }
  return (
    <div>
      <Button variant='contained' onClick={homename}>Home page</Button>
      <br></br>
      <br></br>
      <Button variant='contained' color='secondary' onClick={change}>Gallery</Button>
      <br></br>
      <br></br>
      <Button variant='contained' color='success' onClick={change2}>Contact page</Button>
      <br></br>
      <Typography>Welcome to {page}</Typography>
    </div>
  )
 
}
export default Sim