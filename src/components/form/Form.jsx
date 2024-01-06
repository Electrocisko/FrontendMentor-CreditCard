/* eslint-disable react/prop-types */

import styles from "./form.module.scss";
import PropTypes from "prop-types";

function Form({ handleChange, dataCard, validateData,messages}) {

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
    <p className={styles.errorBlank}>{messages.name}</p>

     <label htmlFor="number">Card Number</label>
      <input
        type="text"
        name="number"
        id="number"
        placeholder="e.g. 1234 5678 9123 0000"
        onChange={handleChange}
        value={dataCard.number}
      />

<p className={styles.errorBlank}>{messages.number}</p>

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
            <p className={styles.errorBlank}>{messages.month}</p>

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
            <p className={styles.errorBlank}>{messages.year}</p>

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
            <p className={styles.errorBlank}>{messages.cvc}</p>

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
  submited: PropTypes.bool,
  validateData: PropTypes.func
};

export default Form;
