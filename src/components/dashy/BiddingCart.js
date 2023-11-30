import React, { useState } from 'react';
import '../../style/Biddingcart.css';
import Scooter from '../../images/grazia.jpg';
import Art from'../../images/art.jpg';
import House from '../../images/house.jpg';
import Layout from '../Layout/Layout';

const BiddingCart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.bidAmount);
  };

  const removeFromCart = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem !== item);
    setCart(updatedCart);
    setTotal(total - item.bidAmount);
  };

  return (
    <Layout showFooter={true}>
    <div className='biddingCartcontainer'>
    <h1>Auction Bidding Cart</h1>

    {/* Display the list of items in the cart */}
    <div id="cart-items">
      <h2>Your Cart</h2>
      <ul id="item-list">
        {cart.map((item, index) => (
          <li key={index}>
            <img src={Scooter,Art,House} alt={item.name} />
            {Scooter, Art, House} - Bid Amount: ${3000, 300, 30000}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>

 {/* Display the available items for bidding */}
 <div id="available-items">
        <h2>Available Items</h2>
        <ul id="available-list">
          <li>
            <img src={Scooter} alt="Item 1" />
            Item 1 - Current Bid: $3000
            <button onClick={() => addToCart({ name: "Item 1", bidAmount: 3000, image: Scooter })}>Add to Cart</button>
           


          </li>
          <li>
            <img src={Art} alt="Item 2" />
            Item 2 - Current Bid: $3S00
            <button onClick={() => addToCart({ name: "Item 2", bidAmount: 300, image: Art })}>Add to Cart</button>
          </li>
          <li>
          <img src={House} alt="Item 3" />
            Item 3 - Current Bid: $30000
            <button onClick={() => addToCart({ name: "Item 3", bidAmount: 75, image: House })}>Add to Cart</button>
          </li>
        </ul>
      </div>
    </div>
    </Layout>
  );
};
  
  
export default BiddingCart;
