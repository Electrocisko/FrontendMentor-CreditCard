import Form from "./components/form/Form";
import Front from "./components/front/Front";
import Back from "./components/back/Back";
import Thanks from "./components/thanks/Thanks";
import styles from "./app.module.scss";

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
    setDataCard({ ...dataCard, [e.target.name]: e.target.value });
  }

  const [submited, setSubmited] = useState(false);
  const [itsOk, setItsOk] = useState(false);
  const [messages, setMessages] = useState({
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  });

  function validateData(e) {
    e.preventDefault();
    const { name, number, month, year, cvc } = dataCard;
    setMessages({
      name: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
    });

    name.length == 0 &&
      setMessages((prevState) => ({ ...prevState, name: "Can't be blank" }));

    number.length != 16 &&
      number.length > 0 &&
      setMessages((prevState) => ({
        ...prevState,
        number: "must have 16 numeric characters",
      }));
    number.length == 0 &&
      setMessages((prevState) => ({ ...prevState, number: "Can't be blank" }));

    month.length != 2 &&
      month.length > 0 &&
      setMessages((prevState) => ({
        ...prevState,
        month: "must have 2 numeric characters",
      }));
    month.length == 0 &&
      setMessages((prevState) => ({ ...prevState, month: "Can't be blank" }));

    year.length != 2 &&
      year.length > 0 &&
      setMessages((prevState) => ({
        ...prevState,
        year: "must have 2 numeric characters",
      }));
    year.length == 0 &&
      setMessages((prevState) => ({ ...prevState, year: "Can't be blank" }));

    cvc.length != 3 &&
      cvc.length > 0 &&
      setMessages((prevState) => ({
        ...prevState,
        cvc: "must have 3 numeric characters",
      }));
    cvc.length == 0 &&
      setMessages((prevState) => ({ ...prevState, cvc: "Can't be blank" }));

      




    setSubmited(true);
    if (name && number && month && year && cvc) {
      setItsOk(true);
    }
  }

  return (
    <div>
      <Back cvc={dataCard.cvc} />
      <Front dataCard={dataCard} />
      <div className={styles.container}>
        {submited && itsOk ? (
          <Thanks />
        ) : (
          <Form
            handleChange={handleChange}
            dataCard={dataCard}
            submited={submited}
            validateData={validateData}
            messages={messages}
          />
        )}
      </div>
    </div>
  );
}

export default App;
