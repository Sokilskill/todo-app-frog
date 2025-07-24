import { useFilters } from "../hooks/useFilters";

const Filter = () => {
  const { filters, updateStatus, updatePriority, updateSort } = useFilters();

  return (
    <div className="bg-white  dark:bg-gray-800 pt-2 rounded-xl lg:shadow lg:p-4">
      <h2 className="hidden lg:block font-semibold text-lg mb-4">Фільтри</h2>
      <div className="flex justify-between gap-4 w-full lg:flex-col">
        <div>
          <label htmlFor="status" className="block text-sm font-medium mb-1">
            Статус
          </label>
          <select
            id="status"
            onChange={(e) => updateStatus(e.target.value)}
            value={filters.status}
            className="w-full rounded-lg border bg-blue-50 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
          >
            <option value="all">Всі</option>
            <option value="pending">Активні</option>
            <option value="completed">Завершені</option>
          </select>
        </div>

        <div>
          <label htmlFor="priority" className="block text-sm font-medium mb-1">
            Пріоритет
          </label>
          <select
            id="priority"
            onChange={(e) => updatePriority(e.target.value)}
            className="w-full rounded-lg border bg-blue-50 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
            value={filters.priority}
          >
            <option value="all">Всі</option>
            <option value="high">Високий</option>
            <option value="medium">Середній</option>
            <option value="low">Низький</option>
          </select>
        </div>

        <div>
          <label htmlFor="sort" className="block text-sm font-medium mb-1">
            Сортування
          </label>
          <select
            id="sort"
            onChange={(e) => updateSort(e.target.value)}
            value={filters.sortBy}
            className="w-full rounded-lg border bg-blue-50 border-gray-300 dark:border-gray-600 dark:bg-gray-700"
          >
            <option value="date-asc">Дата (старі → нові)</option>
            <option value="date-desc">Дата (нові → старі)</option>
            <option value="priority">Пріоритет</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
