import React from 'react'
import { useState  } from 'react';
import '../../style/about.css';
import Aboutimg from '../../images/usabout.jpg';
import Layout from '../Layout/Layout';

const About = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isBackgroundScrolled, setIsBackgroundScrolled] = useState(false);

  const handleSlideBarClick = () => {
    setIsTextVisible(!isTextVisible);
    setIsBackgroundScrolled(!isBackgroundScrolled);
  };
 
  return (
    <>
    <Layout showFooter={true}>
    <div className={`container-about ${isBackgroundScrolled ? 'scrolled' : ''}`}>
    
    <div className='aboutimage'>
      <img src={Aboutimg}  alt='Backgroung Image' style={{
        height:'100vh',
        width: '100%'
      }}/>

    </div>
    <div className={`slide-bar ${isTextVisible ? 'hidden' : ''}`} onClick={handleSlideBarClick}>
        <p className='text-here'>Text Here</p>
      </div>
      <div className={`text-container ${isTextVisible ? 'visible' : ''}`}>
        
     
      <h1>About Our Auction Website</h1>
      <br/>
      <p> Welcome to our auction website, where opportunities meet enthusiasts, and dreams find their rightful owners. We are a dedicated platform that connects buyers and sellers from around the globe, creating a vibrant marketplace for a wide range of auctions. With a passion for excellence and a commitment to fostering trust and transparency, we strive to provide an exceptional auction experience for all our users.  </p>
       
       <br/>
        <h2> Our Mission</h2>
       <br/>
        <p>At our auction website, our mission is simple yet powerful: to empower individuals and businesses by providing a platform that enables them to buy and sell with confidence. We aim to be the go-to destination for anyone seeking unique and valuable assets, whether it's a thriving business, a captivating artwork, a prestigious property, or a cherished personal item. We strive to create a dynamic marketplace that fosters fair competition, transparency, and a sense of community. </p>
       
       <br/>
        <h2>The Auction Experience</h2>
        <br/>
        <p>We believe that auctions should be more than just a transaction; they should be an experience. We have curated an intuitive and user-friendly platform that allows bidders to navigate seamlessly through our auctions, placing bids, engaging in spirited competition, and ultimately securing their desired items. Our robust bidding system ensures fairness, while our secure payment and shipping processes provide peace of mind to buyers and sellers alike.</p>
      <br/>
      <h2>Unparalleled Variety</h2>
      <br/>
      <p>One of the key strengths of our auction website is the diverse range of auctions we offer. From businesses and properties to artworks, vehicles, and personal belongings, we provide a comprehensive platform that caters to a multitude of interests. Our carefully curated auctions cover various industries, genres, and categories, ensuring that there's something for everyone. Explore the vast array of listings, discover hidden gems, and unlock opportunities that align with your passions and aspirations.</p>
   <br/>
   <h2>Trust and Security</h2>
   <br/>
   <p>We understand the importance of trust and security in the online auction world. That's why we have implemented stringent measures to safeguard the interests of our users. Our platform employs advanced security protocols to protect personal information and financial transactions. We thoroughly vet sellers and their listings to maintain a high standard of quality and authenticity. Additionally, our customer support team is always ready to assist and address any concerns, ensuring a smooth and reliable auction experience.</p>
   <br/>
   <h2>Community and Engagement</h2>
   <br/>
   <p>Our auction website is not just a platform; it's a thriving community of buyers, sellers, enthusiasts, and experts. We foster engagement and interaction through features such as user forums, live chats, and bidding histories. We encourage users to share their experiences, ask questions, and connect with fellow auction enthusiasts. Our community is fueled by a shared passion for unique finds, and we invite you to be a part of it.</p>
      <br/>
      <p>Join us as we continue to redefine the auction experience, fueled by trust, transparency, and a dedication to excellence. Start exploring today and let the thrill of the auction ignite your imagination and aspirations.</p>
   <br/>
      <p>Join us as we continue to redefine the auction experience, fueled by trust, transparency, and a dedication to excellence. Start exploring today and let the thrill of the auction ignite your imagination and aspirations.</p>
    </div>
    
    </div>
    </Layout>
</>

  );
};

export default About