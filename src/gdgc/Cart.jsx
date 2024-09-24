import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cart.css';
import { FaShoppingCart } from 'react-icons/fa';

function Cart() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleAddToCart = (product) => {
    const productId = product.id;
    setCart(prevCart => ({
      ...prevCart,
      [productId]: (prevCart[productId] || 0) + 1,
    }));
  };

  const handleDeleteFromCart = (productId) => {
    setCart(prevCart => {
      const updatedCart = { ...prevCart };
      delete updatedCart[productId];
      return updatedCart;
    });
  };

  const handleIncreaseQuantity = (productId) => {
    setCart(prevCart => ({
      ...prevCart,
      [productId]: prevCart[productId] + 1,
    }));
  };

  const handleDecreaseQuantity = (productId) => {
    setCart(prevCart => ({
      ...prevCart,
      [productId]: Math.max(prevCart[productId] - 1, 1),
    }));
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleCartVisibility = () => {
    setShowCart(!showCart);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const calculateTotalMRP = () => {
    return Object.keys(cart).reduce((total, productId) => {
      const product = products.find((p) => p.id === parseInt(productId));
      return total + product.price * cart[productId];
    }, 0);
  };

  const totalMRP = calculateTotalMRP();
  const couponDiscount = 50;
  const platformFee = 10;
  const shippingCharges = 20;
  const totalAmount = totalMRP - couponDiscount + platformFee + shippingCharges;

  return (
    <div className="container">
      <header className="header">
        <h1 className="title">E-Commerce Platform</h1>
        <div className="cart-icon" onClick={toggleCartVisibility}>
          <FaShoppingCart size={24} />
          {Object.keys(cart).length > 0 && (
            <span className="cart-count">{Object.keys(cart).length}</span>
          )}
        </div>
      </header>

      <input
        type="search"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search products"
        className="search-bar"
      />

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-name">{product.title}</h3>
            <p className="product-price">₹{product.price}</p>
            <button onClick={() => handleAddToCart(product)} className="add-to-cart-button">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      {showCart && (
        <div className="cart-dropdown">
          <button className="close-cart" onClick={toggleCartVisibility}>
            Close
          </button>
          <h2 className="cart-title">Cart</h2>
          <div className="cart-items">
            {Object.keys(cart).length > 0 ? (
              Object.keys(cart).map((productId) => {
                const product = products.find((p) => p.id === parseInt(productId));
                return (
                  <div key={productId} className="cart-item">
                    <img src={product.image} alt={product.title} className="cart-item-image" />
                    <div className="cart-item-details">
                      <h4 className="cart-item-name">{product.title}</h4>
                      <p className="cart-item-price">₹{product.price}</p>
                      <div className="quantity-controls">
                        <button onClick={() => handleDecreaseQuantity(productId)}>-</button>
                        <span className="quantity">{cart[productId]}</span>
                        <button onClick={() => handleIncreaseQuantity(productId)}>+</button>
                      </div>
                    </div>
                    <button onClick={() => handleDeleteFromCart(productId)} className="delete-button">
                      X
                    </button>
                  </div>
                );
              })
            ) : (
              <p className="empty-cart">Your cart is empty</p>
            )}
          </div>
          <div className="price-details">
            <h3 className="price-details-title">Price Details</h3>
            <ul className="price-details-list">
              <li className="price-details-item">
                <span className="price-details-label">Total MRP:</span>
                <span className="price-details-value">₹{totalMRP}</span>
              </li>
              <li className="price-details-item">
                <span className="price-details-label">Coupon Discount:</span>
                <span className="price-details-value">-₹{couponDiscount}</span>
              </li>
              <li className="price-details-item">
                <span className="price-details-label">Platform Fee:</span>
                <span className="price-details-value">+₹{platformFee}</span>
              </li>
              <li className="price-details-item">
                <span className="price-details-label">Shipping Charges:</span>
                <span className="price-details-value">+₹{shippingCharges}</span>
              </li>
              <li className="price-details-item">
                <span className="price-details-label">Total Amount:</span>
                <span className="price-details-value">₹{totalAmount}</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
