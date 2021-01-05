import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import auth from '../services/auth';

const classes = "btn btn-primary";
  
const AuthButton = withRouter(({ history }) => {
  if(!auth.isAuthenticated) {
  return <Link className={classes} to="/login">Login</Link>,
    <Link className={classes} to="/register">Register</Link>;    
  }
  
  
  const logout = () => {
    auth.signout().then(() => history.push('/'));
  }
  const register = () => {
  
  }
  //<p className="text-white bg-dark">  Welcome! </p>
  return (
    <div>
   
    
 
      <button className={classes} onClick={logout}>Logout</button>
     
    </div>
  );
});

export default AuthButton;
