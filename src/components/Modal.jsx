import React from "react";
import { MdClose } from "react-icons/md";

const Modal = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center ${
        open ? "visible bg-black/40" : "invisible"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-xl w-[1000px] p-10"
      >
        <button className="absolute right-4 top-4 text-3xl cursor-pointer text-gray-500 hover:text-gray-700" onClick={onClose}>
          <MdClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
