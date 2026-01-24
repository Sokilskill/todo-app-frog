export function formatTodoDate(isoString) {
  const todoDate = new Date(isoString);
  const now = new Date();

  const todoDayStart = new Date(
    todoDate.getFullYear(),
    todoDate.getMonth(),
    todoDate.getDate()
  );
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterdayStart = new Date(todayStart);
  yesterdayStart.setDate(todayStart.getDate() - 1);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  if (todoDayStart.getTime() === todayStart.getTime()) {
    return formatTime(todoDate);
  } else if (todoDayStart.getTime() === yesterdayStart.getTime()) {
    return `вчора ${formatTime(todoDate)}`;
  } else {
    return `${formatDate(todoDate)} ${formatTime(todoDate)}`;
  }
}
