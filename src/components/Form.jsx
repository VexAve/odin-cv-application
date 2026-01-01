import { useState } from "react";

export default function Form({ initialInfo, id, onCancel, onSubmit }) {
  const [info, setInfo] = useState(initialInfo);
  console.log(info);

  function handleChange(newValue, changedField) {
    setInfo({
      ...info,
      [changedField]: {
        ...info[changedField],
        value: newValue,
      },
    });
  }

  return (
    <>
      {info ? (
        <div>
          {Object.entries(info).map(([name, { type, value }]) => {
            const id = name.replace(" ", "-");
            if (type === "text-area") {
              return (
                <>
                  <label htmlFor={id}>{name}:</label>
                  <textarea id={id} onChange={(e) => handleChange(e.target.value, name)}>
                    {value}
                  </textarea>
                </>
              );
            } else if (type === "date-range") {
              return null;
            } else {
              return (
                <>
                  <label htmlFor={id}>{name}:</label>
                  <input
                    type={type}
                    id={id}
                    value={value}
                    onChange={(e) => handleChange(e.target.value, name)}
                  />
                </>
              );
            }
          })}
          <button onClick={onCancel}>Cancel</button>
          <button onClick={() => onSubmit(id, info)}>Submit</button>
        </div>
      ) : null}
    </>
  );
}
