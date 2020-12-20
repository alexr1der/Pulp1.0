import React from 'react';
import { Link } from 'react-router-dom';


function Post({id, mainpicture, nameoftheplace, description, rateplace, street, city, state, zipcode, category, parking, username}) {
  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
          <Link to={"/posts/"+id}>{ nameoftheplace}</Link>
        </div><div>
         {description} </div>
         <div>
         <img src={mainpicture} width="600" height="400"  alt="main" /> </div>
         <div>{street}</div> 
         <div>{city}</div>
           <div>{state}</div>
           <div>{zipcode}</div>
           Parking: <div>{parking}</div>
         <div className="card-footer small text-muted text-right">
         <div> {rateplace} </div>
         <div>{category}</div>
          Made by user { username }
        </div>
      </div>
    </div>
  );
}

export default Post;