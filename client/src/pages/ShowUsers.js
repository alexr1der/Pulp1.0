import React from 'react';
import UsersInside from '../components/UsersInside';
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';

class ShowUsers extends React.Component {
  state = {
    loading: true,
   users: null,
    notFound: false,
 

  }


  componentDidMount() {
    const { id } = this.props.match.params;
    fetch("/api/users/"+id)
      .then(res => res.json())
      .then(users => {
        this.setState({
          users: <UsersInside {...users} />,
          loading: false,
        });
      })
      .catch(err => {
        this.setState({
          notFound: true,
        });
      });
  }


  render() {
    
    if(this.state.notFound) return <Redirect to="/" />;
   
    if(this.state.loading) return <Loading />;
    return this.state.users;

  }
}

export default ShowUsers;