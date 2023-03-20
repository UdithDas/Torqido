import { Typography } from '@mui/material'
import React from 'react'

function Sample() {
    var cname=[{name:"Adul",age:18,place:"Parappukara"},{name:"Mrudhula",age:19,place:"Kalpetta"},{name:"Deepak",age:20,place:"Veloor "}]
  return (
    <div>
      {cname.map((value,index)=>{
        return<li key={index}>{value}</li>
      })}
    </div>
  )
}

export default Sample
