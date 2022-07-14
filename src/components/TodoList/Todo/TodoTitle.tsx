import { ChangeEvent } from 'react';

type TodoTitleProps = {
  title: string;
  isComplete: boolean | undefined;
  isEditing: boolean;
  editedTodoTitle: string;
  setEditedTodoTitle: (newTodoTitle: string) => void;
}

export function TodoTitle(props: TodoTitleProps) {
  const { isEditing, isComplete, title, editedTodoTitle, setEditedTodoTitle } =
    props;

  function onTodoTitleChange(e:ChangeEvent<HTMLInputElement>) {
    const newTodoTitle = e.target.value;
    setEditedTodoTitle(newTodoTitle);
  }

  return (
    <div className="todo-title">
      <span>{isComplete ? `✔️` : `❌`}</span>
      {isEditing ? (
        <input
          className="edit-todo"
          type="text"
          value={editedTodoTitle}
          onChange={onTodoTitleChange}
        />
      ) : (
        <div className={`${isComplete && "todo-done"}`}>{title}</div>
      )}
    </div>
  );
}
