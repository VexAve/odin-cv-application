export default function Form({ info }) {
  console.log(info);
  return (
    <>
      {info ? (
        <div>
          {info.map((field) => {
            if (field.type === "text-area") {
              return (
                <>
                  <label htmlFor={field.name}>{field.name}:</label>
                  <textarea id={field.name}>{field.value}</textarea>
                </>
              );
            } else if (field.type === "date-range") {
              return null;
            } else {
              return (
                <>
                  <label htmlFor={field.name}>{field.name}:</label>
                  <input type={field.type} id={field.name} value={field.value} />
                </>
              );
            }
          })}
          <button>Cancel</button>
          <button>Submit</button>
        </div>
      ) : null}
    </>
  );
}
