import React from 'react';

const Dashboard = ({ totalSales, totalRevenue }) => (
  <div className='Customer-Management'>
    <h2>Dashboard</h2>
    <div className='dashboard'>
      <p>Total Sales : {totalSales}</p>
      <p>Total Revenue : {totalRevenue}</p>
    </div>
  </div>
);

export default Dashboard;
