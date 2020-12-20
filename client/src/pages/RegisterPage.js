import React from 'react';
import { Redirect } from 'react-router-dom';


class RegisterPage extends React.Component {
    state = {
      error: false,
       success: false,
        email: '',
        password:'',
        firstName:'',
        lastName:'',
      }
      firstChanged = (event) => {
        this.setState({
          firstName: event.target.value,
        });
      }
       lastChanged = (event) => {
          this.setState({
            lastName: event.target.value,
          });
        }
          emailChanged = (event) => {
            this.setState({
              email: event.target.value,
            });
          }
            passChanged = (event) => {
              this.setState({
                password: event.target.value,
              });
            }
            
      saveUser = (event) => {
        event.preventDefault();
        fetch("/api/auth/signup", {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({firstName:this.state.firstName, lastName:this.state.lastName, email:this.state.email, password:this.state.password}),
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
              "There was an error during registration."
            </div>
          );
        }

    return (

      <form>
          <div className="input-group">
        { errorMessage }
     
             <input 
            type="First Name"
            className="form-control"
            name="firstName"
            placeholder="FirstName" 
            value={this.state.firstName} 
            onChange={this.firstChanged} />
         <input 
            type="Last Name"
            className="form-control"
            name="lastname"
            placeholder="LastName" 
            value={this.state.lastName} 
            onChange={this.lastChanged} />
             <input 
            type="email"
            className="form-control"
            name="email"
            placeholder="Email" 
            value={this.state.email} 
            onChange={this.emailChanged} />
          <input 
            type="password"
            className="form-control"
            name="password"
            placeholder="Password" 
            value={this.state.password} 
            onChange={this.passChanged} />
         
         
        <button className="btn btn-primary" onClick={this.saveUser}>Register</button>
        </div>
      </form>
    );
  }

}

export default RegisterPage;