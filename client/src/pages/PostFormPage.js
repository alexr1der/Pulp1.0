import React from 'react';
import { Redirect } from 'react-router-dom';

class PostFormPage extends React.Component {
  state = {
    error: false,
    success: false,
    nameoftheplace: '',
    description:'',
    rateplace:'',
    street:'',
    city:'',
    state:'',
    zipcode:'',
    category:'',
    parking:'',
    mainpicture:'',
  }

  nameoftheplaceChanged = (event) => {
    this.setState({
      nameoftheplace: event.target.value
    });
  }
  descriptionChanged = (event) => {
    this.setState({
      description: event.target.value
    });
  }
  rateplaceChanged = (event) => {
    this.setState({
      rateplace: event.target.value
    });
  }
  streetChanged = (event) => {
    this.setState({
      street: event.target.value
    });
  }
  cityChanged = (event) => {
    this.setState({
      city: event.target.value
    });
  }
  stateChanged = (event) => {
    this.setState({
      state: event.target.value
    });
  }
  zipcodeChanged = (event) => {
    this.setState({
      zipcode: event.target.value
    });
  }
  categoryChanged = (event) => {
    this.setState({
      category: event.target.value
    });
  }
  parkingChanged = (event) => {
    this.setState({
      parking: event.target.value
    });
  }
  onFileChange = (event) =>  {
    this.setState({ 
      mainpicture: event.target.files[0] })
}

  savePost = (event) => {
    event.preventDefault();
    
    const data = new FormData();
    
    data.append('mainpicture', this.state.mainpicture);
    data.append('nameoftheplace', this.state.nameoftheplace);
    data.append('description', this.state.description);
    data.append('rateplace', this.state.rateplace);
    data.append('street', this.state.street);
    data.append('city', this.state.city);
    data.append('state', this.state.state);
    data.append('zipcode', this.state.zipcode);
    data.append('category', this.state.category);
    data.append('parking', this.state.parking);
    fetch("/api/posts/", {
      method: 'POST',
      credentials: 'include',
      headers: {

      },
      
      body: data, 
     // body: JSON.stringify({nameoftheplace: this.state.nameoftheplace, description:this.state.description, rateplace:this.state.rateplace, street:this.state.street, city:this.state.city ,state:this.state.state, zipcode:this.state.zipcode, category:this.state.category, parking:this.state.parking}),
    })
      .then(res => {
        if(res.ok) {
          return res.json()
        }

        throw new Error('Content validation');
      })
      .then(post => {
        this.setState({
          success: true,
        });
      })
      .catch(err => {
        this.setState({
          error: true,
        });
      });
  }

  render() {
    if(this.state.success) return <Redirect to="/" />;

    let errorMessage = null;
    if(this.state.error) {
      errorMessage = (
        <div className="alert alert-danger">
          "There was an error saving this post."
        </div>
      );
    }

    return (
      <div className="col-10 col-md-8 col-lg-7">
        { errorMessage }
        <div className="input-group">
          <label>Name Of Place</label> 
          <input 
            type="text" 
            value={this.state.nameoftheplace}
           // className="form-control mr-3 rounded"
            onChange={this.nameoftheplaceChanged}
          />
          <label>Description</label> 
          <input 
            type="text" 
            value={this.state.description}
           // className="form-control mr-3 rounded"
            onChange={this.descriptionChanged}
          />
           <label>Rate</label> 
           

          <input 
            type="text" 
          
            value={this.state.rateplace}
           
           // className="form-control mr-3 rounded"
            onChange={this.rateplaceChanged}
            
          />
           <label>Street</label> 
          <input 
            type="text" 
            value={this.state.street}
          //  className="form-control mr-3 rounded"
            onChange={this.streetChanged}
          />
            <label>City</label> 
          <input 
            type="text" 
            value={this.state.city}
          //  className="form-control mr-3 rounded"
            onChange={this.cityChanged}
          />
            <label>State</label> 
          <input 
            type="text" 
            value={this.state.state}
           // className="form-control mr-3 rounded"
            onChange={this.stateChanged}
          />
            <label>Zipcode</label> 
          <input 
            type="text" 
            value={this.state.zipcode}
           // className="form-control mr-3 rounded"
            onChange={this.zipcodeChanged}
          />
            <label>Category</label> 
          <input 
            type="text" 
            value={this.state.category}
           // className="form-control mr-3 rounded"
            onChange={this.categoryChanged}
          />
            <label>Parking</label> 
          <input 
            type="text" 
            value={this.state.parking}
           // className="form-control mr-3 rounded"
            onChange={this.parkingChanged}
          />
          <label>Picture</label> 
            <input type="file" name="mainpicture" 
             //value={this.state.mainpicture}
            // className="form-control mr-3 rounded"
             onChange={this.onFileChange}/>
            
          

          <button className="btn btn-primary" onClick={this.savePost}>Save Post</button>
        </div>
      </div>
    );
  }
}

export default PostFormPage;