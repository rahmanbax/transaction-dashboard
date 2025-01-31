import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import dataFromJson from "../services/viewData.json";
import TableData from "../components/TableData";
import Modal from "../components/Modal";
import DetailTransaksi from "../components/DetailTransaksi";

const DashboardFromJson = () => {
  const [transactions, setTransactions] = useState([]);
  const [status, setStatus] = useState([]);
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTransactions(dataFromJson.data);
    setStatus(dataFromJson.status);
  }, []);

  const getStatusName = (statusId) => {
    const statusObj = status.find((s) => s.id === statusId);
    return statusObj ? statusObj.name : "UNKNOWN";
  };

  const handleDetailClick = (transaction) => {
    setSelectedTransaction(transaction);
    setOpen(true);
  };

  const groupDataByYearMonth = (data) => {
    return data.reduce((grouped, transaction) => {
      const date = new Date(transaction.transactionDate);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      // Membuat key berdasarkan tahun dan bulan
      const key = `${year}-${month < 10 ? "0" + month : month}`;

      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(transaction);

      return grouped;
    }, {});
  };

  const groupedTransactions = groupDataByYearMonth(transactions);

  return (
    <div className="flex">
      <NavBar />
      <main className="my-10 mx-10 w-full h-fit">
        <div className="flex justify-between">
          <h1 className="font-semibold text-3xl">Daftar Transaksi</h1>
        </div>

        <table className="mt-10 table-auto w-full border-collapse border border-gray-200 shadow-md">
          <thead>
            <tr className="h-15">
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Amount</th>
              <th>Customer Name</th>
              <th>Status</th>
              <th>Transaction Date</th>
              <th>Created By</th>
              <th>Created On</th>
              <th>Actions</th>
            </tr>
          </thead>
          {Object.keys(groupedTransactions).map((key) => {
            const [year, month] = key.split("-");
            return (
              <tbody key={key}>
                <tr>
                  <td
                    colSpan="9"
                    className="text-center font-bold p-2 bg-gray-100"
                  >
                    {year} - {month}
                  </td>
                </tr>

                {groupedTransactions[key].map((transaction) => (
                  <TableData
                    key={transaction.id}
                    transaction={transaction}
                    statusName={getStatusName}
                    showActions={true}
                    showEditButton={false}
                    onDetailClick={handleDetailClick}
                  />
                ))}
              </tbody>
            );
          })}
        </table>
      </main>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold text-2xl">Detail Transaksi</h1>
          {selectedTransaction && (
            <DetailTransaksi
              {...selectedTransaction}
              status={getStatusName(selectedTransaction.status)}
            />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default DashboardFromJson;
