import React from 'react';
import '../App.css';

//NotFound component to pop when unknown url pass
export const NotFound = () => {
  return (
    <div>
      <div className='error'>
        Error 404 Page Not Found
      </div>
    </div>
  )
}