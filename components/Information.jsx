export default function Information({ info }) {
  return (
    <>
      {info.map(field => {
        if (field.type === "date-range") {
          return null;
        } else {
          return (
            <>
              <h2>{field.name}:</h2>
              <p>{field.value}</p>
            </>
          );
        }
      })}
    </>
  )
}
