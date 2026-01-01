import { useState } from "react";
import "./App.css";
import Information from "./components/Information.jsx";
import Form from "./components/Form.jsx";

function App() {
  let nextEducationId = 0,
    nextPracticalId = 0;

  const [information, setInformation] = useState({
    general: [
      {
        name: "Name",
        type: "text",
        value: "",
      },
      {
        name: "Email",
        type: "email",
        value: "",
      },
      {
        name: "Phone Number",
        type: "tel",
        value: "",
      },
    ],
  });

  const [modalInfo, setModalInfo] = useState(null);

  function handleEdit(id) {
    setModalInfo(information[id]);
  }

  return (
    <>
      <h1>General Information</h1>
      <Information
        info={information["general"]}
        onEdit={handleEdit}
        id={"general"}
        key={"general"}
      />
      <hr />
      <h1>Educational Experience</h1>
      {Object.entries(information)
        .filter((item) => item[0].startsWith("education"))
        .map((item) => (
          <Information info={item[1]} key={item[0]} />
        ))}
      <hr />
      <h1>Practical Experience</h1>
      {Object.entries(information)
        .filter((item) => item[0].startsWith("practical"))
        .map((item) => (
          <Information info={item[1]} key={item[0]} />
        ))}
      <Form info={modalInfo} />
    </>
  );
}

export default App;
