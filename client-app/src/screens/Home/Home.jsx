import React from 'react';
import './Home.css'
import Layout from '../../components/Shared/Layout/Layout'
import PostCards from '../../components/PostCards/PostCards'

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <PostCards />
      </div>
    </Layout>
  );
}
export default Home