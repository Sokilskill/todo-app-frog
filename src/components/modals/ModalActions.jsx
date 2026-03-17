import Button from "../ui/Button";

const ModalActions = ({
  onCancel,
  onConfirm,
  confirmLabel = "Зберегти",
  cancelLabel = "Скасувати",
  typeConfirm,
  confirmVariant = "default",
  form,
}) => (
  <div className="flex flex-col justify-center gap-3 mt-4 sm:gap-6 md:gap-8 sm:flex-row ">
    <Button
      variant="secondary"
      onClick={onCancel}
      className="md:w-full md:max-w-[90px]"
    >
      {cancelLabel}
    </Button>

    <Button
      type={typeConfirm}
      variant={confirmVariant}
      onClick={onConfirm}
      form={form}
      className="md:w-full md:max-w-[90px]"
    >
      {confirmLabel}
    </Button>
  </div>
);

export default ModalActions;
