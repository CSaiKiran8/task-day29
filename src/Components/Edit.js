import React,{useState} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

// Edit component with two arguments users and update
export const Edit = ({users,update}) => {
  // useParams gives the id of user
  const {id} = useParams();
  //filter the user with id to update
  let  user = users.find(e => e.Empid===id);

  const [field, setfield] = useState({
    Firstname: user.Firstname,
    Lastname: user.Lastname,
    Empid: user.Empid,
    City: user.City,
  });
  
  let navigate = useNavigate();
  // form to display the current user values need to update
  return (
    <div className="container">
      <h1>Edit</h1>
      <form className='d-flex flex-column m-2 ' onSubmit={async(e)=>{e.preventDefault();
        user=field;
        await update(user,id);
        navigate('/profile/:id');
      }}>
       <FormControl>
      <TextField
        required
       id="demo"
       focused
        color="error"
        value={field.Firstname}
        onChange={(e)=>{setfield({...field,Firstname:e.target.value})}}
        label="FirstName"
      /></FormControl><br/><br/>
      <FormControl>
      <TextField
        required
        id="demo"
        focused
        color="error"
        value={field.Lastname}
        onChange={(e)=>{setfield({...field,Lastname:e.target.value})}}
        label="LastName"
      /></FormControl><br/><br/>
      <FormControl>
      <TextField
        disabled
        id="demo"
        type="number"
        value={field.Empid}
        onChange={(e)=>{setfield({...field,Empid:e.target.value})}}
        label="Employee ID"
      /></FormControl><br/><br/>
      <FormControl>
      <TextField
        required
        id="demo"
        focused
        color="error"
        value={field.City}
        onChange={(e)=>{setfield({...field,City:e.target.value})}}
        label="City"
      /></FormControl>
      <br/>
        <div className="d-flex justify-content-center">
        <Button type='submit' variant="contained" color="error">
            Edit
          </Button>
        </div>
      </form>
    </div>
  )
}