import React from "react";

const DetailTransaksi = (props) => {
  const {
    id,
    productID,
    productName,
    amount,
    customerName,
    status,
    transactionDate,
    createBy,
    createOn,
  } = props;
  return (
    <table className="table-auto overflow-hidden shadow-sm">
      {/* <thead className="text-left">
                  <tr className="bg-gray-100">
                    <th className="p-2 border border-gray-200">Title</th>
                    <th className="p-2 border border-gray-200">Isi</th>
                  </tr>
                </thead> */}
      <tbody className="border border-gray-200">
        <tr>
          <td className="p-2 border border-gray-200 font-medium">
            Transaction ID
          </td>
          <td className="p-2 border border-gray-200">{id}</td>
        </tr>
        <tr>
          <td className="p-2 border border-gray-200 font-medium">Product ID</td>
          <td className="p-2 border border-gray-200">{productID}</td>
        </tr>
        <tr>
          <td className="p-2 border border-gray-200 font-medium">
            Product Name
          </td>
          <td className="p-2 border border-gray-200">{productName}</td>
        </tr>
        <tr>
          <td className="p-2 border border-gray-200 font-medium">Amount</td>
          <td className="p-2 border border-gray-200">{amount}</td>
        </tr>
        <tr>
          <td className="p-2 border border-gray-200 font-medium">
            Customer Name
          </td>
          <td className="p-2 border border-gray-200">{customerName}</td>
        </tr>
        <tr>
          <td className="p-2 border border-gray-200 font-medium">Status</td>
          <td className="p-2 border border-gray-200">{status}</td>
        </tr>
        <tr>
          <td className="p-2 border border-gray-200 font-medium">
            Transaction Date
          </td>
          <td className="p-2 border border-gray-200">{transactionDate}</td>
        </tr>
        <tr>
          <td className="p-2 border border-gray-200 font-medium">Created By</td>
          <td className="p-2 border border-gray-200">{createBy}</td>
        </tr>
        <tr>
          <td className="p-2 border border-gray-200 font-medium">Created On</td>
          <td className="p-2 border border-gray-200">{createOn}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DetailTransaksi;
