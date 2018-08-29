import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  //Rerender the component after the post is fetched.
  componentDidMount() {
    //The same as const id = this.props.match.params.id;
    const { id } = this.props.match.params; //match the wildcard :id in the route
    this.props.fetchPost(id);
  }

  render() {
    //The same as const post = this.props.post;
    const { post } = this.props;

    //When this component is firstly rendered, no post has been fetched.
    //post is undefined until a post is fetched and returned.
    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories:{post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  };
}
//{posts} is the application state.
//ownProps is the props of the current component.
function mapStateToProps({ posts }, ownProps) {
  //Map the single post needed only, but not the entire list of posts, to this component's props.
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
