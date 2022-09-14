interface TodoButtonsProps {
  isEditing: boolean;
  done: boolean;
  onClickToggle: () => void;
  onClickDelete: () => void;
  onClickEditOrDone: () => void;
}

export function TodoButtons(props: TodoButtonsProps) {
  const { isEditing, done, onClickToggle, onClickDelete, onClickEditOrDone } =
    props;

  return (
    <div className="todo-buttons">
      {!isEditing && (
        <button className="toggle-button" onClick={onClickToggle}>
          {done ? "Mark Not Done" : "Mark Done"}
        </button>
      )}
      {!done && (
        <button className="edit-button" onClick={onClickEditOrDone}>
          {isEditing ? "Done" : "Edit"}
        </button>
      )}
      {!isEditing && (
        <button className="delete-button" onClick={onClickDelete}>
          Delete
        </button>
      )}
    </div>
  );
}
