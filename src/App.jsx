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

    if (e.target.name == "number") {
      const numero = (e.target.value).replace(/ /g, "") // clean the spaces
      let result="";
      if (numero.length > 0) {
        result = numero.match(/.{1,4}/g).join(" "); // This add a space each 4 charaters
      }
      setDataCard({ ...dataCard, [e.target.name]: result });
    } else {
      setDataCard({ ...dataCard, [e.target.name]: e.target.value });
    }
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
    let nameOk = false, numberOk = false, monthOk = false, yearOk = false, cvcOk = false, expiredOk = false;

    const { name, number, month, year, cvc } = dataCard;
    setMessages({
      name: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
    });
    setItsOk(false);
    setSubmited(false);

    const regex = /^[0-9]*$/;
    const aux = (dataCard.number).replace(/ /g, ""); // clean the spaces
 
    if (name == "") {
      setMessages((prevState) => ({ ...prevState, name: "Can't be blank" }));
    } else {
      nameOk = true;
    }

    if (number.length != 19 && number != "") {
      setMessages((prevState) => ({
        ...prevState,
        number: "Must have 16 numeric characters",
      }));
    } else if (number == "") {
      setMessages((prevState) => ({ ...prevState, number: "Can't be blank" }));
    } 
    else if (!regex.test(aux)) {
      setMessages((prevState) => ({ ...prevState, number: "Wrong format, numbers only " }));
      numberOk = false;
    } 
    else {
      numberOk = true;
    }

    if (month.length != 2 && month != "") {
      setMessages((prevState) => ({
        ...prevState,
        month: "Must have 2 numeric characters",
      }));
    } else if (month == "") {
      setMessages((prevState) => ({ ...prevState, month: "Can't be blank" }));
    } else  if (month > 12 || month < 1) {
      setMessages((prevState) => ({ ...prevState, month: "Month Invalid" }));
      monthOk = false;
    } else {
      monthOk = true;
    }

    if (year.length != 2 && year != "") {
      setMessages((prevState) => ({
        ...prevState,
        year: "Must have 2 numeric characters",
      }));
    } else if (year == "") {
      setMessages((prevState) => ({ ...prevState, year: "Can't be blank" }));
    } else {
      yearOk = true;
    }

    if (cvc.length != 3 && cvc != "") {
      setMessages((prevState) => ({
        ...prevState,
        cvc: "Must have 2 numeric characters",
      }));
    } else if (cvc == "") {
      setMessages((prevState) => ({ ...prevState, cvc: "Can't be blank" }));
    } else {
      cvcOk = true;
    }

    let cardDate = new Date(parseInt(year) + 2000, month - 1);
    let currentDate = new Date();
    if (cardDate.getFullYear() < currentDate.getFullYear()) {
      setMessages((prevState) => ({ ...prevState, year: "Card Expired" }));
    } else if (
      cardDate.getFullYear() == currentDate.getFullYear() &&
      cardDate.getMonth() < currentDate.getMonth()
    ) {
      setMessages((prevState) => ({ ...prevState, year: "Card Expired" }));
    } else {
      expiredOk = true;
    }

    if (nameOk && numberOk && monthOk && yearOk && cvcOk && expiredOk) {
      setItsOk(true);
      setSubmited(true);
    }
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.cardImages}>
          <div className={styles.backCard}>
            <Back cvc={dataCard.cvc} />
          </div>
          <div className={styles.frontCard}>
            <Front dataCard={dataCard} />
          </div>
        </div>

        {submited && itsOk ? (
          <div className={styles.thanks}>
            <Thanks />
          </div>
        ) : (
          <div className={styles.form}>
            <div>
              <Form
                handleChange={handleChange}
                dataCard={dataCard}
                submited={submited}
                validateData={validateData}
                messages={messages}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
