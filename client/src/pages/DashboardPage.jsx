import React, { useEffect, useState } from 'react';
import Dashboard from '../components/Dashboard';
import axios from 'axios';

const DashboardPage = () => {
  const [totalSales, setTotalSales] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    // Function to fetch total sales and total revenue from the backend
    const fetchTotals = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/dashboard/totals');
        setTotalSales(response.data.totalSales);
        setTotalRevenue(response.data.totalRevenue);
      } catch (error) {
        console.error('Error fetching total sales and revenue:', error);
      }
    };

    fetchTotals();
  }, []); // Empty dependency array to run only once on component mount

  return <Dashboard totalSales={totalSales} totalRevenue={totalRevenue} />;
};

export default DashboardPage;
