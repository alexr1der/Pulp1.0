import React from 'react';
import User from '../components/User';
import Loading from '../components/Loading';


class SpecificUser extends React.Component {
  state = {
    users: [],
    loading: true,
    test:'',
   
  }
  test = (event) => {
    let name=event.target.value; 
    this.setState({
       test: name, 
      })
      fetch("/api/users?userName="+name)
   
        .then(res => res.json())
        .then(users => { 
          this.setState({
            loading: false,
           users: users.map((p,ii) => <User {...p} key={ii} />
           
            ),
          
          });
        })
        .catch(err => console.log("API ERROR: ", err));

      ;}



  componentDidMount() {
   

  fetch("/api/users")

      .then(res => res.json())
      .then(users => { 
        this.setState({
          loading: false,
          users: users.map((p,ii) => <User {...p} key={ii} />
         
          ),
        
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }
  

  render() {
    if(this.state.loading) {
      return <Loading />;
    }
    
    return (

      <div className="container-fluid text-center">
        <div className="row justify-content-center">
  
        <input 
            type="userName"
            className="form-control"
            name="userName"
            placeholder="userName" 
            value={this.state.test}
            onChange={this.test} />
        </div>
        { this.state.users }
      </div>
    );
  }
}

export default SpecificUser;