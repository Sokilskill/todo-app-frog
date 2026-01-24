export function getPriorityClass(priority) {
  const classes = {
    high: "bg-red-300 dark:bg-red-600/60 text-red-800 dark:text-red-200",
    medium:
      "bg-yellow-300 dark:bg-yellow-600/60 text-yellow-800 dark:text-yellow-200",
    low: "bg-green-300 dark:bg-green-600/60 text-green-800 dark:text-green-200",
  };
  return classes[priority] || "";
}
