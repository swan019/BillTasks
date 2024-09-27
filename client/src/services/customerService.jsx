import axios from 'axios';

const API_URL = 'http://localhost:5000/api/customers';

export const getCustomers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addCustomer = async (customer) => {
  await axios.post(API_URL, customer);
};


