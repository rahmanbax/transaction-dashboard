import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";

// Fungsi untuk mendapatkan daftar transaksi
export const getTransactions = async (callback) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/transactions/`);
    callback(response.data); 
  } catch (error) {
    console.error("Error fetching transactions:", error);
  }
};

// Fungsi untuk mendapatkan transaksi berdasarkan ID
export const getTransactionsById = async (callback, id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/transactions/${id}`);
    callback(response.data); 
  } catch (error) {
    console.error("Error fetching transaction by ID:", error);
  }
};

// Fungsi untuk membuat transaksi baru
export const createTransaction = async (data, callback) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/transactions/`, data);
    callback(response.data); 
  } catch (error) {
    console.error("Error creating transaction:", error);
  }
};

// Fungsi untuk mengupdate transaksi yang ada
export const editTransaction = async (id, data, callback) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/api/transactions/${id}`, data);
    callback(response.data);
  } catch (error) {
    console.error("Error updating transaction:", error);
  }
};

// Fungsi untuk mendapatkan daftar produk
export const getProducts = async (callback) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/products`);
    callback(response.data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// Fungsi untuk mendapatkan daftar produk
export const getStatuses = async (callback) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/statuses`);
    callback(response.data);
  } catch (error) {
    console.error("Error fetching statuses:", error);
  }
};
