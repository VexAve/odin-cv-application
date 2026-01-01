import editIcon from "../assets/pencil-outline.svg";
import deleteIcon from "../assets/trash-can-outline.svg";

export default function Information({ info, onEdit, onDelete, id }) {
  return (
    <>
      {Object.entries(info).map(([name, { type, value }]) => {
        if (type === "date-range") {
          return null;
        } else {
          return (
            <p key={name}>
              <b>{name}:</b> {value ? value : "N/A"}
            </p>
          );
        }
      })}
      <button onClick={() => onEdit(id)}>
        <img src={editIcon} alt="edit" />
      </button>
      {!id.startsWith("general") && (
        <button onClick={() => onDelete(id)}>
          <img src={deleteIcon} alt="delete" />
        </button>
      )}
    </>
  );
}
