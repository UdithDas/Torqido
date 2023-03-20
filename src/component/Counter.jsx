import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'

const Counter = () => {
    var [cnt, setCnt] = useState(0);
    const increment = () => {
        setCnt(++cnt);
    }
    const decrement = () => {
        setCnt(cnt - 1);
    }
    return (
        <div>
            <Typography variant='h3'>{cnt}</Typography>
            <br></br>
            <Button variant='contained' onClick={decrement}>-</Button>
            <br></br>
            <br></br>
            <Button variant='contained' onClick={increment}>+</Button>
        </div>
    )
}

export default Counter
