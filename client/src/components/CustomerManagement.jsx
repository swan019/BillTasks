import React, { useState, useEffect } from 'react';
import { getCustomers, addCustomer } from '../services/customerService';

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({
    name: '',
    gender: '',
    contact: '',
    email: ''
  });

  useEffect(() => {
    async function fetchCustomers() {
      const data = await getCustomers();
      setCustomers(data);
    }
    fetchCustomers();
  }, []);

  const handleAddCustomer = async () => {
    await addCustomer(newCustomer);
    setCustomers([...customers, newCustomer]);
    setNewCustomer({ name: '', gender: '', contact: '', email: '' });
  };

  return (
    <div className='Customer-Management'>
      <h2>Customer Management</h2>
      <div className=''>
        <form className='form' onSubmit={handleAddCustomer}>
          <input
            type="text"
            placeholder="Name"
            value={newCustomer.name}
            onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Gender"
            value={newCustomer.gender}
            onChange={(e) => setNewCustomer({ ...newCustomer, gender: e.target.value })}
          />
          <input
            type="text"
            placeholder="Contact"
            value={newCustomer.contact}
            onChange={(e) => setNewCustomer({ ...newCustomer, contact: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={newCustomer.email}
            onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
          />
          <button className='shortBTN' type="submit">Add Customer</button>
        </form>
        <ul>
          {customers.map((customer, index) => (
            <li key={index}>{customer.name} - {customer.email}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CustomerManagement;
