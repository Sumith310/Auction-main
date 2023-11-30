import React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

import "../style/Dashboard.css";
import { Link } from 'react-router-dom';

import LoginIcon from '@mui/icons-material/Login';

import DescriptionIcon from '@mui/icons-material/Description';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import BackPag from '../images/dashboard2.jpg';
import Footer from '../components/Layout/Footer';
import Logd from '../images/dashboaard logo.png';
function Dashboard() {
  

  return (
   
      
        <>
        <div >
         
        <nav className='navbar'>
          <div className='navbar-logo'>
          <img src={Logd} style={{
            height:'auto',
            width: '200px',
          }}
          />
          </div>
          
          <ul className='navbar-list'>
            <li className='navbar-item'>
              <Link to="/login">
             
                <LoginIcon/>

                Login
              </Link>
            </li>

            
           
              <li className='navbar-item'>
              <Link to="/terms">
             
               <DescriptionIcon/>
               
                Terms
              </Link>
            </li>
            <li className='navbar-item'>
              <Link to="/about">
              
              <FactCheckIcon/>
               
                About
              </Link>
            </li>
            <li className='navbar-item'>
              <Link to="/contact">
             
              <ContactPageIcon/>
              
                Contact
              </Link>
            </li>
          </ul>

        </nav>
        <div className='container'>
        <img src={BackPag} className='backg'
          />
        </div>
        
             </div> 
             <Footer/>
      </>
  
  );
}

export default Dashboard;
