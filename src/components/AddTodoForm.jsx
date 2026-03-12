import { useState } from "react";
import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";

import { selectProjects } from "../redux/projects/projectSelector";
import { useAddTodoForm } from "../hooks/useAddTodoForm";
import TodoFormFields from "./TodoFormFields";
import Button from "./Button";
import Modal from "./Modal";
import { useMediaQuery } from "../hooks/useMediaQuery";

const AddNewTodoForm = ({ form, handleSubmit, projects }) => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow lg:p-4">
      <TodoFormFields
        prefix="todo"
        showSubmitButton={true}
        title={form.title}
        setTitle={form.setTitle}
        priority={form.priority}
        setPriority={form.setPriority}
        color={form.color}
        setColor={form.setColor}
        projectId={form.projectId}
        setProjectId={form.setProjectId}
        onSubmit={handleSubmit}
        projects={projects}
      />
    </div>
  );
};

const AddTodoForm = () => {
  const { form, handleSubmit } = useAddTodoForm();
  const mediaQuery = useMediaQuery();

  const projects = useSelector(selectProjects);

  const [showAddNewTodoModal, setShowAddNewTodoModal] = useState(false);

  if (mediaQuery !== "lg") {
    return (
      <div className="fixed bottom-10 right-10 z-50">
        <Button
          icon={FaPlus}
          className="bg-blue-500 text-white rounded-full p-2 shadow-md hover:bg-blue-400 hover:scale-125 transition-transform duration-300"
          aria-label="Add Todo"
          onClick={() => setShowAddNewTodoModal(true)}
        />

        {showAddNewTodoModal && (
          <Modal
            className="py-6 px-4 "
            isOpen={showAddNewTodoModal}
            onClose={() => setShowAddNewTodoModal(false)}
          >
            <AddNewTodoForm />
          </Modal>
        )}
      </div>
    );
  }

  return (
    <AddNewTodoForm
      form={form}
      handleSubmit={handleSubmit}
      projects={projects}
    />
  );
};

export default AddTodoForm;
