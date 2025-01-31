import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

// TableData.jsx
const TableData = ({
  transaction,
  onDetailClick,
  statusName,
  showActions = true,
}) => {
  return (
    <tr className="h-15 border border-gray-200 hover:bg-gray-100 transition ease-out">
      <td className="text-center">{transaction.productID}</td>
      <td className="text-center">{transaction.productName}</td>
      <td className="text-center">{transaction.amount}</td>
      <td className="text-center">{transaction.customerName}</td>
      <td className="text-center">{statusName(transaction.status)}</td>
      <td className="text-center">{transaction.transactionDate}</td>
      <td className="text-center">{transaction.createBy}</td>
      <td className="text-center">{transaction.createOn}</td>
      {showActions && (
        <td className="flex justify-center gap-4 items-center my-3">
          <Link to={`/edit/${transaction.id}`}>
            <Button label="Edit" />
          </Link>
          <Button
            onClick={() => onDetailClick(transaction)}
            primary={false}
            label="Detail"
          />
        </td>
      )}
    </tr>
  );
};

export default TableData;
