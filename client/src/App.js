import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';
import AuthButton from './components/AuthButton';
import SpecificUser from './pages/SpecificUser';
import Mypage from './pages/Mypage';

import './App.css';
import ShowUsers from './pages/ShowUsers';



function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary shadow mb-3">
      <Link className="navbar-brand" to="/">Tip Gram</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/posts/new">
            Post a TipGram
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/mypage">
           My page
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/users">
            Search for users
          </NavLink>
        </li>
      </ul>
      <AuthButton />
    </nav>
  );
}


class App extends React.Component {
  render() {
    return (
        <Router>
          <Navigation />
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <Switch>
                <Route path="/login" component={LoginPage} />
                <PrivateRoute path="/posts/new" component={PostFormPage} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <PrivateRoute exact path="/mypage" component={Mypage} />
                <Route path="/register" component={RegisterPage} />
                <Route exact path="/" component={PostsListPage} />
                <PrivateRoute exact path="/users" component={SpecificUser} />
                <PrivateRoute exact path="/users/:id" component={ShowUsers} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
