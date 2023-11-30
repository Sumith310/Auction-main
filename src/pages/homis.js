import React from 'react'
import Layout from '../components/Layout/Layout'
import AuctImg from "../images/auctionpppng.png";
const homis = () => {
  return (
<Layout>
<div className=' auct-container'>
          
          <img src={AuctImg} alt="auct"className='auct-back' />
          
            <div className='text'>
            <h3>Embark on your path to success today by taking proactive steps to</h3>
            <h3>enhance your visibility and maximize profits for your products or services.</h3>
           </div>
          
          </div>
          <br/>
</Layout>
  )
}

export default homis