import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Validation = () => {
    const [submitted, setSubmitted] = useState(false);
    const [Inputname, setInputname] = useState({
        fname: "",
        lname: ''
    })
    const [validation, setValidation] = useState({
        fname: "",
        lname: ''
    })
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setInputname({ ...Inputname, [name]: value })
    }
    const checkValidation = () => {
        let errors = validation;

        if (!Inputname.fname.trim()) {
            errors.fname = "First name is required";
        } else {
            errors.fname = "";

            setValidation(errors);
        }
    }
    useEffect(() => {
        checkValidation();
    });
    const handlesubmit =(f)=>{
        f.preventDefault();
        setSubmitted(true);
    }
    return (
        <div>
            <form
            id='registrationForm'
            onSubmit={handlesubmit}
            >
            <br></br>
            <TextField label='First Name' variant='outlined' name='fname' value={Inputname.fname} onChange={inputHandler}></TextField>
            {(validation.fname && submitted) && <p>{validation.fname}</p>}
            <br></br>
            <br></br>
            {/* <TextField label='Last Name' variant='outlined' name='lname' value={Inputname.lname} onChange={inputHandler}></TextField> */}
            <br></br>
            <br></br>
            <Button type='submit' variant='contained'>SAVE</Button>
            </form>
        </div>
    )
}

export default Validation
