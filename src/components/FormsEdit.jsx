import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";
import {
  getProducts,
  getTransactionsById,
  editTransaction,
  getStatuses,
} from "../services/transaction.service"; // Import dari service

const FormsEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Mengambil ID dari URL

  const [formData, setFormData] = useState({
    productID: "",
    amount: "",
    customerName: "",
    status: "",
  });

  const [products, setProducts] = useState([]); // Menyimpan data produk dari API
  const [statuses, setStatuses] = useState([]); // Menyimpan data statuses dari API

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mengambil data produk
        await getProducts((data) => setProducts(data));
        await getStatuses((data) => setStatuses(data));

        // Mengambil data transaksi berdasarkan ID
        await getTransactionsById((data) => {
          setFormData({
            productID: data.productID,
            amount: data.amount,
            customerName: data.customerName,
            status: data.status,
          });
        }, id);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const transactionData = {
      productID: parseInt(formData.productID),
      amount: parseInt(formData.amount),
      customerName: formData.customerName,
      status: parseInt(formData.status),
    };

    try {
      // Mengupdate transaksi
      await editTransaction(id, transactionData, () => {
        alert("Transaksi berhasil diubah");
        navigate("/");
      });
    } catch (error) {
      console.error("Error updating transaction:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex gap-5">
        <div className="flex flex-1 flex-col gap-2">
          <label className="font-medium">Nama Customer</label>
          <input
            type="text"
            name="customerName"
            placeholder="Masukkan Nama Customer"
            value={formData.customerName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 focus:outline-emerald-500 shadow-sm rounded-xl"
            required
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <label className="font-medium">Status Pembayaran</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 focus:outline-emerald-500 shadow-sm rounded-xl"
            required
          >
            <option value="">Pilih Status</option>
            {statuses.map((status) => (
              <option key={status.id} value={status.id}>
                {status.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex-1 flex flex-col gap-2">
          <label className="font-medium">Pilih Produk</label>
          <select
            name="productID"
            value={formData.productID}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 focus:outline-emerald-500 shadow-sm rounded-xl"
            required
          >
            <option value="">Pilih Produk</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <label className="font-medium">Jumlah</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Masukkan Jumlah"
            className="w-full p-2 border border-gray-300 focus:outline-emerald-500 shadow-sm rounded-xl"
            required
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button label="Update" />
      </div>
    </form>
  );
};

export default FormsEdit;
