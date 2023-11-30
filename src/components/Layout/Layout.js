import React from 'react'
import Header from '../Header'
import Footer from './Footer'




const Layout = ({ children, showFooter}) => {
  return (
    <>
    <Header/>
       

       <div>
       <main>{children}</main> 
       {showFooter && <Footer />}
       </div>
        
       
        </>
  )
}

export default Layout