import { Fragment, useState } from "react";

export default function Form({ initialInfo, id, onCancel, onSubmit }) {
  const [info, setInfo] = useState(
    id && (initialInfo || (id.startsWith("education")
      ? {
          "School Name": {
            type: "text",
            value: "",
          },
          "Title of Study": {
            type: "text",
            value: "",
          },
          "Date of Study": {
            type: "text",
            value: "",
          },
        }
      : {
          "Company Name": {
            type: "text",
            value: "",
          },
          "Position Title": {
            type: "text",
            value: "",
          },
          "Main Responsibilities": {
            type: "text-area",
            value: "",
          },
          "Date of Work": {
            type: "text",
            value: "",
          },
        }
  )));
  console.log(initialInfo);
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
                <Fragment key={id}>
                  <label htmlFor={id}>{name}:</label>
                  <textarea
                    id={id}
                    onChange={(e) => handleChange(e.target.value, name)}
                    value={value}
                  ></textarea>
                </Fragment>
              );
            } else if (type === "date-range") {
              return null;
            } else {
              return (
                <Fragment key={id}>
                  <label htmlFor={id}>{name}:</label>
                  <input
                    type={type}
                    id={id}
                    value={value}
                    onChange={(e) => handleChange(e.target.value, name)}
                  />
                </Fragment>
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
