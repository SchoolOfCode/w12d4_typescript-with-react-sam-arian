import { useState } from "react";

interface addTodo {
  addTodo: (newTodoTitle: string) => void;
}

export function AddTodo(props: addTodo) {
  const { addTodo } = props;

  const [todoTitle, setTodoTitle] = useState("");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoTitle(e.target.value);
  }

  function onClickAdd() {
    if (todoTitle.replace(/^\s+|\s+$/g, "") === "") {
      return;
    }
    addTodo(todoTitle);
    setTodoTitle("");
  }

  return (
    <div className="add-todo">
      <span className="add-todo-prefix">👉</span>
      <input
        type="text"
        placeholder="I need to ..."
        value={todoTitle}
        onChange={onChange}
      />
      <button className="add-todo-add" onClick={onClickAdd}>
        Add
      </button>
    </div>
  );
}
