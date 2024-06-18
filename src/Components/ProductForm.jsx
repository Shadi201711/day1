import React, { useState } from 'react';
import AddProduct from './AddProduct';
import ProductTable from './ProductTable';
import '../CSS/ProductForm.css'; // Import the CSS file

const ProductForm = () => {
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const deleteProduct = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };

  return (
    <div className="product-form">
      <h1>Product Form</h1>
      <AddProduct addProduct={addProduct} />
      <ProductTable products={products} deleteProduct={deleteProduct} />
    </div>
  );
};

export default ProductForm;
