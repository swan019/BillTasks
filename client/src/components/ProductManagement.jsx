import React, { useState, useEffect } from 'react';
import { getProducts, addProduct } from '../services/productService';

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    quantity: '',
    brand: ''
  });

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProducts();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const handleAddProduct = async () => {
    await addProduct(newProduct);
    setProducts([...products, newProduct]);
    setNewProduct({ name: '', price: '', quantity: '', brand: '' });
  };

  return (
    <div className='Customer-Management'>
      <h2>Product Management</h2>
      <div className=''>
        <form className='form' onSubmit={handleAddProduct}>
          <input
            type="text"
            placeholder="Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          />
          <input
            type="number"
            placeholder="Quantity"
            value={newProduct.quantity}
            onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
          />
          <input
            type="text"
            placeholder="Brand"
            value={newProduct.brand}
            onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}
          />
          <button className='shortBTN' type="submit">Add Product</button>
        </form>
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product.name} - {product.price}</li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default ProductManagement;
