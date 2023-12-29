import Form from "./components/form/Form";
import Front from "./components/front/Front";
import Back from "./components/back/Back";
import { useState } from "react";

function App() {

  const [dataCard, setDataCard] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  function handleChange(e) {
    console.log(e.target.name, e.target.value);
    setDataCard({ ...dataCard, [e.target.name]: e.target.value });
  }


  return (
    <div>
      <Back/>
      <Front dataCard={dataCard} />
      <Form handleChange={handleChange} dataCard={dataCard}  />
    </div>
  );
}

export default App;
