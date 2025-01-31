import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import FormsAdd from "../components/FormsAdd";
import { getTransactions } from "../services/transaction.service";

const AddDataPage = () => {
  return (
    <div className="flex">
      <NavBar />
      <main className="my-10 mx-10 w-full h-fit ">
        <h1 className="font-semibold text-3xl">Tambah Transaksi</h1>
        <div className="w-full mt-10 p-4 bg-white border-1 border-gray-200 shadow-md">
          <FormsAdd />
        </div>
      </main>
    </div>
  );
};

export default AddDataPage;
