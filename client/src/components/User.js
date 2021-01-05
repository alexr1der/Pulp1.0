import React from 'react';
import { Link } from 'react-router-dom';

function User({id, firstName, lastName, email, userName}) {
  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
          <Link to={"/users/"+id}>{userName}</Link>
        </div>Email {email}

         <div className="card-footer small text-muted text-right">

        
        </div>
      </div>
    </div>
  );
}

export default User;