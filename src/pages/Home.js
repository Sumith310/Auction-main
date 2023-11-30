import React from 'react'
import Layout from '../components/Layout/Layout'
import "../style/HomeStyles.css";
import Background from "../images/auction background.jpg"
import { Link } from 'react-router-dom';
import Category from './Category';

const Home = () => {
  return (
    <Layout showFooter={false} >
      <div className='home-container'>
        <img src={Background} alt="Background" className='background-image'
        style={{
          width:'100%',
          height:'100vh',
          objectFit:  'cover',
          borderRadius: '8px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        }}
        />
      
        <div className='overlay'>
          <div className='content'>
          <h1> Bid For Your Desire</h1>
          <p>Join the Global Community of Everyday Buying and Selling!</p>
          <br/>
          <br/>
          <Link to="/biddingcart">
          <button className='get-started-button' >Explore Listing</button>
          </Link>
          </div>
        </div>
      </div>
<br/>


    <Category  />
    
    </Layout>
        
  )
}

export default Home;