import editIcon from "../assets/pencil-outline.svg"

export default function Information({ info, onEdit, id }) {
  return (
    <>
      {info.map(field => {
        if (field.type === "date-range") {
          return null;
        } else {
          return <p><b>{field.name}:</b> {field.value ? field.value : "N/A"}</p>;
        }
      })}
      <button onClick={() => onEdit(id)}><img src={editIcon} alt="edit" /></button>
    </>
  )
}
