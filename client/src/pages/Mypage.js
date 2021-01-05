import React from 'react';
import Mypage from '../components/Mypage';
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';

let teta= [];

class ShowUsers extends React.Component {
  state = {
    loading: true,
   users: null,
    notFound: false,
    z:[],


  }

 
   
  componentDidMount() {
  
  
    fetch("/api/mypage")
      .then(res => res.json())
      .then(users => {
        this.setState({
          loading: false,
          users: users.map((p,ii) => <Mypage {...p} key={ii}/>,
         
          ),
        


        });
      })
      .catch(err => {
        this.setState({
          notFound: true,
         
        });
      });
  }
  

 

  render() {
  
    
    var svgStates = document.getElementsByTagName("path");
    
    for (var i = 0; i < svgStates.length; i++) {
     teta.push(svgStates[i].id); //second console output//I am just testing it to get at least some values
    }
    console.log(teta);
    if(this.state.notFound) return <Redirect to="/" />;
   
    if(this.state.loading) return <Loading />;
    return this.state.users;

  }
}

export default ShowUsers;