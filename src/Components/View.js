import * as React from 'react';
import { useParams,useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// View component
export const View = ({ users }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  let res = users.find((e) => e.Empid === id);
  const card = (
    <React.Fragment>
      <CardContent>
      <Typography variant="h5" component="div">
      Employee ID: {`${res.Empid}`}
        </Typography>
        <Typography variant="h5" component="div">
        Firstname: {`${res.Firstname}`}
        </Typography>
        <Typography variant="h5" component="div">
         Lastname: {`${res.Lastname}`}
        </Typography>
        <Typography variant="h5" component="div">
          City: {`${res.City}`}
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  
  
  // displaying the user details
  return (
    <>
    <div className="d-flex justify-content-center">
      <Box sx={{ maxWidth: 275 }} >
      <Card variant="outlined">{card}</Card>
      </Box>
    </div>
    <div className="d-flex justify-content-center">
    <button className='btn btn-danger' onClick={()=>{navigate('/')}}>Back</button>
    </div>
    </>
  );
};
