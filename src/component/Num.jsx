import React from 'react'

function Num() {
    var pname=[1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
      {pname.map((value,index)=>{
        return<li key={index}>{value}</li>
      })}
    </div>
  )
}

export default Num

