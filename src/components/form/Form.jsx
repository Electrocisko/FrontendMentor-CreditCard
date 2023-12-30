import { useState } from "react";
import styles from "./form.module.scss";
import PropTypes from "prop-types";

function Form({ handleChange, dataCard }) {
  const [submited, setSubmited] = useState(false);

  function validateData(e) {
    e.preventDefault();
    console.log(dataCard);
    setSubmited(true);
  }

  return (
    <form className={styles.cardForm}>
      <label htmlFor="name">Cardholder Name</label>
      <input
        type="text"
        id="Name"
        name="name"
        placeholder="e. g. Jane Appleseed"
        onChange={handleChange}
        value={dataCard.name}
      />
      {!dataCard.name && submited && (
        <p className={styles.errorBlank}>Can&apos;t be blank</p>
      )}

      <label htmlFor="number">Card Number</label>
      <input
        type="number"
        name="number"
        id="number"
        placeholder="e.g. 1234 5678 9123 0000"
        onChange={handleChange}
        value={dataCard.number}
      />
      {!dataCard.number && submited && (
        <p className={styles.errorBlank}>Can&apos;t be blank</p>
      )}

      <div className={styles.cardData}>
        <div>
          <label htmlFor="month">Exp. Date (MM/YY)</label>
          <label htmlFor="cvc">CVC</label>
        </div>
        <div className={styles.group}>
          <div>
            <input
              type="number"
              name="month"
              id="month"
              placeholder="MM"
              onChange={handleChange}
              value={dataCard.month}
            />
            {!dataCard.month && submited && (
              <p className={styles.errorBlank}>Can&apos;t be blank</p>
            )}
          </div>
          <div>
            <input
              type="number"
              name="year"
              id="year"
              placeholder="YY"
              onChange={handleChange}
              value={dataCard.year}
            />
            {!dataCard.year && submited && (
              <p className={styles.errorBlank}>Can&apos;t be blank</p>
            )}
          </div>
          <div>
            <input
              type="number"
              name="cvc"
              id="cvc"
              placeholder=" e.g. 123"
              onChange={handleChange}
              value={dataCard.cvc}
            />
            {!dataCard.cvc && submited && (
              <p className={styles.errorBlank}>Can&apos;t be blank</p>
            )}
          </div>
        </div>
      </div>
      <button onClick={validateData}>Confirm</button>
    </form>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func,
  dataCard: PropTypes.object,
};

export default Form;
