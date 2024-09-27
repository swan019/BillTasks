import React from 'react';
import { Link } from 'react-router-dom';

import "../App.css"

const Header = () => (
  <header>
    <nav>
      <ul className='Side-Items'>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/customers">Customers</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/billing">Billing</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
