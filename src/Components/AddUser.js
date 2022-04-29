import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

// AddUser component with one arguments addUsers
export const AddUser = ({addUsers}) => {
  // field state have the values of user
  const [field, setfield] = useState({
    Firstname: "",
    Lastname: "",
    Empid: "",
    City: "",
  });
  let navigate = useNavigate();

  //form to add user details
  return (
    <div className="container">
      <h1>Add User</h1>
      <form className='d-flex flex-column m-4 ' onSubmit={async(e)=>{e.preventDefault();
      // passing the value from AddUser to App using addUsers
      await addUsers(field);
       navigate('/');
      }}>
      <FormControl>
      <TextField
        required
        focused
        color="error"
       id="demo"
        value={field.Firstname}
        onChange={(e)=>{setfield({...field,Firstname:e.target.value})}}
        label="FirstName"
      /></FormControl><br/><br/>
      <FormControl>
      <TextField
        required
        focused
        color="error"
        id="demo"
        value={field.Lastname}
        onChange={(e)=>{setfield({...field,Lastname:e.target.value})}}
        label="LastName"
      /></FormControl><br/><br/>
      <FormControl>
      <TextField
        required
        focused
        color="error"
        id="demo"
        type="number"
        value={field.Empid}
        onChange={(e)=>{setfield({...field,Empid:e.target.value})}}
        label="Employee ID"
      /></FormControl><br/><br/>
      <FormControl>
      <TextField
        required
        focused
        color="error"
        id="demo"
        value={field.City}
        onChange={(e)=>{setfield({...field,City:e.target.value})}}
        label="City"
      /></FormControl>
      <br/>
      <div className="d-flex justify-content-center">
      <Button type='submit' variant="contained" color="error">
            ADD
          </Button>
        </div>
        </form>
    </div>
  );
};