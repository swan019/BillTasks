import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import DashboardPage from './pages/DashboardPage';
import CustomerManagementPage from './pages/CustomerManagementPage';
import InventoryManagementPage from './pages/InventoryManagementPage';
import BillingPage from './pages/BillingPage';
import Navbar from './components/Navbar';

import "./App.css"

function App() {
  return (
    <Router>
      <Navbar/>
      <div className='Main-Parts'>
        <Header />
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/customers" element={<CustomerManagementPage />} />
          <Route path="/products" element={<InventoryManagementPage />} />
          <Route path="/billing" element={<BillingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
