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
         <img src={mainpicture} width="400" height="400"  alt="main" />  </div>
         <div className="card-footer small text-muted text-right">
         <div> {rateplace} </div>
         Made by user { username }
        </div>
      </div>
    </div>
  );
}

export default Post;