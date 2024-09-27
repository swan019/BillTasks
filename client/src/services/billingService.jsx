import axios from 'axios';

const API_URL = 'http://localhost:5000/api/bills';

export const getBills = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addBill = async (bill) => {
  await axios.post(API_URL, bill);
};

export const deletebill = async (id) => {
  console.log(`API_URL/{id}`);
  await axios.post(API_URL, bill);
};

export const UpdateBill = async (billId, updatedBill) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/bills/${billId}`, updatedBill);
    return response.data; // Return the updated bill
  } catch (error) {
    console.error('Error updating bill:', error);
    throw error; // Propagate the error so it can be handled in the component
  }
};
