import React from 'react';
import Layout from '../components/Layout/Layout';
import { Business, Home, LocalShipping, Palette, Person } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import "../style/CategorySyles.css"
import AuctImg from "../images/auctionpppng.png";

const Category = () => {
  return (
    <Layout showFooter={true}>
      <div className='category-container'>
        <div className='category-title'>
        <h2>Elect a Category</h2>
        </div>
       
        <div className='category-list'>
          <div className='category-item'>
            <Link to='/business' className='category-link'>
              <Business fontSize='large' />
              <h3>Business</h3>
              <p>Explore business-related items for sale.</p>
            </Link>
          </div>
          <div className='category-item'>
            <Link to='/vehicles' className='category-link'>
              <LocalShipping fontSize='large' />
              <h3>Shop Vehicles</h3>
              <p>Discover vehicles for your shop or business.</p>
            </Link>
          </div>
          <div className='category-item'>
            <Link to='/land-buildings' className='category-link'>
              <Home fontSize='large' />
              <h3>Land and Buildings</h3>
              <p>Find land and buildings for sale or rent.</p>
            </Link>
          </div>
          <div className='category-item'>
            <Link to='/art-personal'className='category-link' >
              <Palette fontSize='large' />
              <h3>Art and Personal Items</h3>
              <p>Discover art pieces and personal items for sale.</p>
            </Link>
          </div>
          <div className='category-item'>
            <Link to='/personal'className='category-link'>
              <Person fontSize='large' />
              <h3>Personal</h3>
              <p>Explore personal items for sale.</p>
            </Link>
          </div>
        </div>
      </div>
      <br/>
      <br/>


      <div className=' auct-container'>
          <div className='image-container'>
          <img src={AuctImg} alt="auct"className='auct-back' />
          </div>
         
        
            <div className='text-containerr'>
            <h3>Embark on your path to success today by taking proactive steps to</h3>
            <h3>enhance your visibility and maximize profits for your products or services.</h3>
            <br/>
            <br/>
            <Link to="">
              <button className='get-button'> Craft Your Auction</button>
              <button className='get-button'> Pursue Auction</button>
            </Link>
           </div>
           </div>
          
          
          <br/>
    </Layout>
  );
};

export default Category;
