import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {
  //A life cycle method is a function on a react componnet class that is automatically called by react.
  //componentDidMount is one of the react life cycle methods.
  //It's automatically called by react immediately after this component has shown up inside the DOM.
  //This prevents the user to see the intermediate state.
  //When this PostsIndex component is firstly rendered, there is no post available.
  //After the ajax call resolves, PostsIndex component re-renders to generate a list of posts.
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

//The first argument is function mapStateToProps.
//The second argument is function mapDispatchToProps to return bindActionCreators().
//Instead of creating an extra function mapDispathToProps, we pass in the action
//creator itself to the second argument.
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
