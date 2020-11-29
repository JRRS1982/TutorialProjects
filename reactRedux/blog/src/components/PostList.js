import React from 'react';
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  /** will call componentDidMount as soon as the component is rendered */
  componentDidMount() {
    /** will then call fetchPosts  */
    console.log(this.props + 'before');
    this.props.fetchPosts();
    console.log(this.props + 'after');
  }

  renderList() {
    console.log(this);
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"></i>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

/** 
 * mapStateToProps is how we get data into the React component, every time the reducer is run we are going to pass that to 
 */
const mapStateToProps = (state) => {
  return { posts: state.posts };
}

export default connect(null, {
  mapStateToProps,
  fetchPosts,
})(PostList);