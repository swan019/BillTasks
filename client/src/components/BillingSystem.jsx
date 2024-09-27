import React, { useState, useEffect } from 'react';
import { getBills, addBill, deletebill, UpdateBill } from '../services/billingService';
import { getCustomers } from '../services/customerService';
import { getProducts } from '../services/productService';
import { MdDeleteOutline } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";

const BillingSystem = () => {
  const [bills, setBills] = useState([]);
  const [newBill, setNewBill] = useState({
    customer: '',
    products: [],
    totalAmount: ''
  });
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [updateFlag, setUpdateFlag] = useState(false);
  const [updateDataID, setupdateDataID] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const customerData = await getCustomers();
        setCustomers(customerData);
        const productData = await getProducts();
        setProducts(productData);
        const data = await getBills();
        setBills(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddBill = async (e) => {
    e.preventDefault();

    if (!newBill.customer || !newBill.products.length || !newBill.totalAmount) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const addedBill = await addBill(newBill);
      setBills((prevBills) => [...prevBills, addedBill]);
      setNewBill({ customer: '', products: [], totalAmount: '' });
      setSuccessMessage('Bill added successfully');
      setError('');
    } catch (err) {
      setError('Failed to add bill');
    }
  };

  const deleteItem = (id) => {
    console.log(id);
    console.log(bills);
    setBills(bills.filter(bill => bill._id !== id));
  }

  const updateBill = () => {
    UpdateBill(updateDataID, newBill);
    setUpdateFlag(false);

  }

  const PopBTN = (id) => {
    setUpdateFlag(true);
    const ToUpdateData = bills.find(bill => bill._id === id);
    console.log(ToUpdateData._id);
    setupdateDataID(ToUpdateData._id);
  }


  return (
    <div className='Customer-Management'>
      <h2>Billing System</h2>

      {
        updateFlag ? (
          <div className='PopUpScreen'>
            <div className='popinCenter'>
              <form className='form frompop' onSubmit={updateBill}>
                {error && <p className="error">{error}</p>}
                {successMessage && <p className="success">{successMessage}</p>}
                <div >
                  <label>Select Customer</label>
                  <select className='select'
                    value={newBill.customer}
                    onChange={(e) => setNewBill({ ...newBill, customer: e.target.value })}
                  >
                    <option value="">Select Customer</option>
                    {customers.map((customer, index) => (
                      <option key={index} value={customer._id}>{customer.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>Select Products</label>
                  <select
                    className='select'
                    multiple
                    value={newBill.products}
                    onChange={(e) => {
                      const selectedProducts = [...e.target.selectedOptions].map(opt => opt.value);
                      setNewBill({ ...newBill, products: selectedProducts });
                    }}
                  >
                    {products.map((product, index) => (
                      <option key={index} value={product._id}>{product.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>Total Amount</label>
                  <input
                    className='select'
                    type="number"
                    placeholder="Total Amount"
                    value={newBill.totalAmount}
                    onChange={(e) => setNewBill({ ...newBill, totalAmount: e.target.value })}
                  />
                </div>
                <button type="submit">Add Bill</button>
              </form>
            </div>

          </div>
        ) : (
          <div className='Parts'>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <form className='form' onSubmit={handleAddBill}>
                {error && <p className="error">{error}</p>}
                {successMessage && <p className="success">{successMessage}</p>}
                <div >
                  <label>Select Customer</label>
                  <select className='select'
                    value={newBill.customer}
                    onChange={(e) => setNewBill({ ...newBill, customer: e.target.value })}
                  >
                    <option value="">Select Customer</option>
                    {customers.map((customer, index) => (
                      <option key={index} value={customer._id}>{customer.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>Select Products</label>
                  <select
                    className='select'
                    multiple
                    value={newBill.products}
                    onChange={(e) => {
                      const selectedProducts = [...e.target.selectedOptions].map(opt => opt.value);
                      setNewBill({ ...newBill, products: selectedProducts });
                    }}
                  >
                    {products.map((product, index) => (
                      <option key={index} value={product._id}>{product.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>Total Amount</label>
                  <input
                    className='select'
                    type="number"
                    placeholder="Total Amount"
                    value={newBill.totalAmount}
                    onChange={(e) => setNewBill({ ...newBill, totalAmount: e.target.value })}
                  />
                </div>
                <button type="submit">Add Bill</button>
              </form>
            )}
            <ul className='Billing-Box'>
              {bills.map((bill, index) => (

                <div className='bill-box-update'>
                  <li key={index}>
                    Customer: {bill.customer.name || 'Unknown'},
                    Products: {bill.products.length ? bill.products.map(product => product.name).join(', ') : 'Unknown'},
                    Total: {bill.totalAmount || 'Unknown'}
                  </li>
                  <div className='icons'
                    onClick={() => PopBTN(bill._id)}
                  >
                    <GrUpdate />
                  </div>

                  <div className='icons-delete'
                    onClick={() => deleteItem(bill._id)}
                  >
                    <MdDeleteOutline />
                  </div>

                </div>
              ))}
            </ul>
          </div>
        )
      }


    </div>
  );
};

export default BillingSystem;
