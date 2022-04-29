import React from 'react'
import { Users } from './Users'
import '../App.css';

//Home component with two arguments as users and delUser
// Users is child component of Home
export const Home = ({users,delUser}) => {
  return (
    <div>
    <strong className='head' >
     List of Users
     </strong> 
     <Users users={users} delUser={delUser}/>
    </div>
  )
}