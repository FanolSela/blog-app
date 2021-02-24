import React, { useState, useEffect } from "react";
import "./PostDetail.css";
import Layout from "../../components/Shared/Layout/Layout";
import { getPost } from "../../services/post";
import { useParams } from "react-router-dom";

const PostDetail = (props) => {
  const [post, setPost] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      setPost(post);
      setLoaded(true);
    };
    fetchPost();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout>
      <div className="post-detail">
        <div className="title">{post.title}</div>
        <div className="detail">
          <img
            className="post-detail-image"
            src={post.imgURL}
            alt={post.name}
          />
          <div className="content">{post.content}</div>
          <div className="button-container">
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetail;
