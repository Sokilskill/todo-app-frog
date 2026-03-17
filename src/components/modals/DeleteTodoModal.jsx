import Modal from "../ui/Modal";
import ModalActions from "./ModalActions";

export const DeleteTodoModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col justify-center max-w-[400px] text-gray-900 min-w dark:text-white p-5 gap-3 md:gap-8">
        <h3 className="text-xl sm:text-2xl font-bold ">
          Задання буде видалено!
        </h3>

        <ModalActions
          onCancel={onClose}
          onConfirm={onConfirm}
          confirmLabel="Видалити"
          confirmVariant="danger"
        />
      </div>
    </Modal>
  );
};
