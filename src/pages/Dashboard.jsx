import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { getTransactions } from "../services/transaction.service";
import Modal from "../components/Modal";
import DetailTransaksi from "../components/DetailTransaksi";
import TableData from "../components/TableData";

const HomePage = () => {
  const [transaction, setTransaction] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const statusName = (statusId) => {
    if (statusId === 1) {
      return "SUCCESS";
    } else if (statusId === 2) {
      return "FAILED";
    } else if (statusId === 3) {
      return "PENDING";
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getTransactions((res) => {
          setTransaction(res.data);
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleDetailClick = (transaction) => {
    setSelectedTransaction(transaction);
    setOpen(true);
  };

  // Tambah fungsi untuk mengelompokkan data
  const groupDataByYearMonth = (data) => {
    return data.reduce((grouped, transaction) => {
      const date = new Date(transaction.transactionDate);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const key = `${year}-${month < 10 ? "0" + month : month}`;

      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(transaction);

      return grouped;
    }, {});
  };

  const groupedTransactions = groupDataByYearMonth(transaction);

  return (
    <div className="flex">
      <NavBar />
      <main className="my-10 mx-10 w-full h-fit">
        <div className="flex justify-between">
          <h1 className="font-semibold text-3xl">Daftar Transaksi</h1>
          <Link to="/add">
            <Button label="+ Tambah Transaksi" />
          </Link>
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
                    onDetailClick={handleDetailClick}
                    statusName={statusName}
                  />
                ))}
              </tbody>
            );
          })}
        </table>

        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="flex flex-col gap-5">
            <h1 className="font-semibold text-2xl">Detail Transaksi</h1>
            {selectedTransaction && (
              <DetailTransaksi
                {...selectedTransaction}
                status={statusName(selectedTransaction.status)}
              />
            )}
          </div>
        </Modal>
      </main>
    </div>
  );
};

export default HomePage;