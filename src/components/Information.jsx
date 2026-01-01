import editIcon from "../assets/pencil-outline.svg";

export default function Information({ info, onEdit, id }) {
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
    </>
  );
}
