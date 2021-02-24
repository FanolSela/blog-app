import React, { Component } from 'react';
import './PostCards.css'
import PostCard from '../PostCard/PostCard'
import { getPosts } from '../../services/post'

class PostCards extends Component {
  constructor() {
    super() 
      this.state = {
        posts: []
      }
  }

  async componentDidMount() {
    const posts = await getPosts()
    this.setState({ posts })
  }

  render() {

    const POSTS = this.state.posts.map((post, index) =>
      <PostCard _id={post._id} name={post.title} imgURL={post.imgURL} key={index} />
    )

    return (
      <div className="post-cards">
        <div className="check-posts">Check out the Posts!</div>
        <div className="cards">
          {POSTS}
        </div>
      </div>
    );
  }
}

export default PostCards;