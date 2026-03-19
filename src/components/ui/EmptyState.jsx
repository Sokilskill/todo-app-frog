import Button from "./Button";

const EmptyState = ({ message, onReset, resetLabel = "Скинути фільтри" }) => (
  <div className="flex flex-col items-center justify-center p-10 bg-white dark:bg-gray-800 rounded-xl shadow">
    <p className="text-center text-gray-500 dark:text-gray-400 mb-4">
      {message}
    </p>
    {onReset && (
      <Button variant="danger" onClick={onReset}>
        {resetLabel}
      </Button>
    )}
  </div>
);

export default EmptyState;
