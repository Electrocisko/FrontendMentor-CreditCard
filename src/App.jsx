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

  function validateData(e) {
    e.preventDefault();
    setSubmited(true);
    const { name, number, month, year, cvc } = dataCard;
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
          />
        )}
      </div>
    </div>
  );
}

export default App;
