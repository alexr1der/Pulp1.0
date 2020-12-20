import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';


class PostsListPage extends React.Component {
  state = {
    posts: [],
    loading: true,
    cityFilter:'',
    test:'',
    test1:'',
  }



   test = (event) => {
    let city1=event.target.value; 
    this.setState({
       test: city1, 
      })
      fetch("/api/posts?city1="+city1)
   
        .then(res => res.json())
        .then(posts => { 
          this.setState({
            loading: false,
            posts: posts.map((p,ii) => <Post {...p} key={ii} />
           
            ),
          
          });
        })
        .catch(err => console.log("API ERROR: ", err));

      ;}
  componentDidMount() {
   // let {cityFilter}=this.state.cityFilter;
   let city1=this.state.test;
  fetch("/api/posts?city1="+city1)
    //fetch("/api/posts?city1="+cityFilter)
      .then(res => res.json())
      .then(posts => { 
        this.setState({
          loading: false,
          posts: posts.map((p,ii) => <Post {...p} key={ii} />
         
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
     <div>
       <select onChange={this.test} value={this.state.test}>
       <option value="null"></option>
       <option value="Park">Park
      </option>
      <option value="Waterfall">Waterfall</option>
    </select>
    </div>
         
        </div>
        { this.state.posts }
      </div>
    );
  }
}

export default PostsListPage;