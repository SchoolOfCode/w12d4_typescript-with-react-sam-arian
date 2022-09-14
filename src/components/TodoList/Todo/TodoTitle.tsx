interface todoTitle {
  isEditing: boolean;
  done: boolean;
  title: string;
  editedTodoTitle: string;
  setEditedTodoTitle(value: string): void;
}

export function TodoTitle(props: todoTitle) {
  const { isEditing, done, title, editedTodoTitle, setEditedTodoTitle } = props;

  function onTodoTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newTodoTitle = e.target.value;
    setEditedTodoTitle(newTodoTitle);
  }

  return (
    <div className="todo-title">
      <span>{done ? `✔️` : `❌`}</span>
      {isEditing ? (
        <input
          className="edit-todo"
          type="text"
          value={editedTodoTitle}
          onChange={onTodoTitleChange}
        />
      ) : (
        <div className={`${done && "todo-done"}`}>{title}</div>
      )}
    </div>
  );
}
