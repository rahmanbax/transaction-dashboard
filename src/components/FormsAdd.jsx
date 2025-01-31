import React, { useState, useEffect } from "react";
import Button from "./Button";
import { createTransaction } from "../services/transaction.service"; // Pastikan path benar
import { getProducts, getStatuses } from "../services/transaction.service"; // Mengimpor fungsi untuk mendapatkan produk
import { useNavigate } from "react-router-dom";

const FormsAdd = () => {
  const [formData, setFormData] = useState({
    productID: "",
    amount: "",
    customerName: "",
    status: "",
    createBy: "rahman",
  });

  const navigate = useNavigate();

  const [products, setProducts] = useState([]); // Menyimpan data produk dari API
  const [statuses, setStatuses] = useState([]); // Menyimpan data statuses dari API

  // Mengambil data produk dari API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mengambil data produk
        await getProducts((data) => setProducts(data));
        await getStatuses((data) => setStatuses(data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
      createBy: formData.createBy,
    };

    try {
      // Mengupdate transaksi
      await createTransaction(transactionData, () => {
        alert("Transaksi berhasil ditambahkan");
        navigate("/");
      });
    } catch (error) {
      console.error("Error creating transaction:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="flex gap-5">
        <div className="flex flex-col flex-1 gap-2">
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
        <Button label="Tambah" />
      </div>
    </form>
  );
};

export default FormsAdd;
