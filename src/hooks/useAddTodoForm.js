import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todosSlice";

export const useAddTodoForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [color, setColor] = useState("#3b82f6");
  const [projectId, setProjectId] = useState("all");

  const resetForm = () => {
    setTitle("");
    setPriority("medium");
    setColor("#3b82f6");
    setProjectId("all");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newTodo = {
      title: title.trim(),
      priority,
      color,
      projectId,
    };

    dispatch(addTodo(newTodo));
    resetForm();
  };

  return {
    form: {
      title,
      setTitle,
      priority,
      setPriority,
      color,
      setColor,
      projectId,
      setProjectId,
    },
    handleSubmit,
  };
};
