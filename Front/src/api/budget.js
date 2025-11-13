import axios from "axios";

const API = "http://localhost:4000/api";

export const newBudgetRequest = async (data) => {
  const res = await axios.post(`${API}/newBudget`, data);
  return res;
};

export const getItemsRequest = async () => {
  const res = await axios.get(`${API}/newBudget`);
  return res;
};
