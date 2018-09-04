import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  //Rerender the component after the post is fetched.
  componentDidMount() {
    //Post is alreday fetched when getting the post list. So don't refetch it.
    if (!this.props.post) {
      //The same as const id = this.props.match.params.id;
      const { id } = this.props.match.params; //match the wildcard :id in the route
      this.props.fetchPost(id);
    }
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
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
        <Link to="/">Back To Index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
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

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
