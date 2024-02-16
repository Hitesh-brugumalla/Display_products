import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access URL parameters

function ProductDetailPage() {
  const { productId } = useParams(); // Extract the productId from URL parameters
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${productId}`) // Use backticks for string interpolation
      .then(res => res.json())
      .then(data => setProductData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [productId]); // Include productId in the dependency array to fetch data when it changes

  return (
    <div className="product-container">
      <h1>Product Details</h1>
      {productData ? (
        <div className="product-box">
          <img src={productData.thumbnail} alt="Product Thumbnail" />
          <div className="product-info">
            <p className="product-title">{productData.title}</p>
            <p className="product-description">{productData.description}</p>
            <p className="product-price">Price: ${productData.price}</p>
            <p className="product-rating">Rating: {productData.rating}</p>
            {/* Add more product details here */}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetailPage;
