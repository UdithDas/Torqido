import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebase = () => {
    var [fname,newfname]=useState("Udith")
    const changeName =()=>{
        newfname("Mohandas")
    }
  return (
    <div>
      <Typography variant='h4'>Welome {fname}</Typography>
      <br>
      </br>
      <Button variant='contained' onClick={changeName}>change</Button>
    </div>
  )
}

export default Statebase