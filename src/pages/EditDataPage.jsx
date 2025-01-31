import React from "react";
import NavBar from "../components/NavBar";
import FormsEdit from "../components/FormsEdit";

const EditDataPage = () => {
  return (
    <div className="flex">
      <NavBar />
      <main className="my-10 mx-10 w-full h-fit ">
        <h1 className="font-semibold text-3xl">Edit Transaksi</h1>
        <div className="w-full mt-10 p-4 bg-white border-1 border-gray-200 shadow-md">
          <FormsEdit />
        </div>
      </main>
    </div>
  );
};

export default EditDataPage;
