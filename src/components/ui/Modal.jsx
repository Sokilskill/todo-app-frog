import { useEffect } from "react";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";
import Button from "./Button";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ children, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const handleEscape = (event) => {
        if (event.key === "Escape") {
          onClose();
        }
      };
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className="fixed left-0 bottom-0 top-0 right-0 bg-gray-800/30 px-5 p-8 md:px-11 flex justify-center items-center z-[1000]"
      onClick={onClose}
    >
      <div
        className="relative  bg-white  shadow-2xl dark:bg-gray-900 p-10 md:px-10 md:py-12 rounded-lg dark:shadow-[0 4px 6px rgba(0, 0, 0, 0.5)] max-w-4xl "
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          className="absolute top-3.5 right-3.5 flex justify-center items-center  bg-none text-amber-700 w-8 h-8 md:top-7 md:right-7 "
          size=""
          variant=""
          onClick={onClose}
        >
          <IoClose size={"20px"} />
        </Button>
        {children}
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
