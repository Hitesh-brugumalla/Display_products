import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AllProducts.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = event => {
    setSortType(event.target.value);
  };

  const filteredProducts = products.filter(product => {
    return (
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const sortedProducts = sortType
    ? [...filteredProducts].sort((a, b) => {
        if (sortType === 'name') {
          return a.title.localeCompare(b.title);
        } else if (sortType === 'price') {
          return a.price - b.price;
        }
        return 0;
      })
    : filteredProducts;

  return (
    <div className="product-list">
      <h1>Amazon-like Product List</h1>
      <div className="search-sort">
        <input
          type="text"
          placeholder="Search by product name or description"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select value={sortType} onChange={handleSortChange}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </div>
      <div className="products">
        {sortedProducts.map(product => (
          <div key={product.id} className="product">
            <img src={product.thumbnail} alt={product.title} />
            <div className="product-details">
              <h2>{product.title}</h2>
              <p>Description: {product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p>
              <p>Stock: {product.stock}</p>
              <p>Brand: {product.brand}</p>
              <p>Category: {product.category}</p>
              <Link to={`/products/${product.id}`} className="view-more-button">
                View More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
