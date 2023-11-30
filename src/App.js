import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Pagenotfound from './pages/Pagenotfound'
import Category from "./pages/Category";
import Dashboard from "./pages/Dashboard";
import Login from './pages/Login';
import About from './components/dashy/About';
import Terms from './components/dashy/Terms';
import Site from './components/dashy/Site';
import Contact from './components/dashy/Contact';
import BiddingCart from './components/dashy/BiddingCart';

function App() {
  return (
    <>
    
    
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
       
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/category" element={<Category/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/about" element={<About />}/>
       <Route path="/terms" element={<Terms/>}/>
       <Route path="/site" element={<Site/>}/>
       <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Pagenotfound/>}/>
        <Route path="/biddingcart" element={<BiddingCart/>}/>
      </Routes>
      </BrowserRouter>

    </div>
    </>
  );
}

export default App;
