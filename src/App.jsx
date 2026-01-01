import { useState } from "react";
import "./App.css";
import addIcon from "./assets/plus.svg";
import Information from "./components/Information.jsx";
import Form from "./components/Form.jsx";

function App() {
  const [information, setInformation] = useState({
    general: {
      Name: {
        type: "text",
        value: "",
      },
      Email: {
        type: "email",
        value: "",
      },
      "Phone Number": {
        type: "tel",
        value: "",
      },
    },
  });

  const [modalInfoId, setModalInfoId] = useState(null);

  function handleEdit(id) {
    setModalInfoId(id);
  }

  function handleDelete(id) {
    setInformation(({ [id]: _, ...newInformation }) => newInformation)
  }

  function handleCancel() {
    setModalInfoId(null);
  }

  function handleSubmit(id, info) {
    setModalInfoId(null);
    setInformation({
      ...information,
      [id]: info,
    });
  }

  console.log(Object.entries(information));

  return (
    <>
      <h1>General Information</h1>
      <Information
        info={information["general"]}
        onEdit={() => handleEdit("general")}
        id={"general"}
        key={"general"}
      />
      <hr />
      <h1>Educational Experience</h1>
      {Object.entries(information)
        .filter((item) => item[0].startsWith("educational"))
        .map((item) => (
          <Information info={item[1]} onEdit={handleEdit} onDelete={handleDelete} id={item[0]} key={item[0]} />
        ))}
        <button onClick={() => setModalInfoId("educational" + crypto.randomUUID())}>
          <img src={addIcon} alt="add" />
        </button>
      <hr />
      <h1>Practical Experience</h1>
      {Object.entries(information)
        .filter((item) => item[0].startsWith("practical"))
        .map((item) => (
          <Information info={item[1]} onEdit={handleEdit} onDelete={handleDelete} id={item[0]} key={item[0]} />
        ))}
        <button onClick={() => setModalInfoId("practical" + crypto.randomUUID())}>
          <img src={addIcon} alt="add" />
        </button>
      <Form
        key={modalInfoId + "reset"}
        initialInfo={information[modalInfoId]}
        id={modalInfoId}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default App;
