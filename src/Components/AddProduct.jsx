import React, { useState } from 'react';
import '../CSS/ProductForm.css';
const AddProduct = ({ addProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [errors, setErrors] = useState({});

  const handleAddProduct = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!price) newErrors.price = 'Price is required';
    if (price <= 0) newErrors.price = 'Price must be greater than 0';
    if (!category) newErrors.category = 'Category is required';
    if (!quantity) newErrors.quantity = 'Quantity is required';
    if (quantity <= 0) newErrors.quantity = 'Quantity must be greater than 0';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newProduct = { name, price, category, quantity };
    addProduct(newProduct);

    // Clear the form and errors
    setName('');
    setPrice('');
    setCategory('');
    setQuantity('');
    setErrors({});
  };

  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </label>
      </div>
      <div>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.price && <p className="error">{errors.price}</p>}
        </label>
      </div>
      <div>
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          {errors.category && <p className="error">{errors.category}</p>}
        </label>
      </div>
      <div>
        <label>
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          {errors.quantity && <p className="error">{errors.quantity}</p>}
        </label>
      </div>
      <button onClick={handleAddProduct}>Add to Table</button>
    </div>
  );
};

export default AddProduct;
