/* eslint-disable react/prop-types */

import styles from "./form.module.scss";

function Form({handleChange, dataCard}) {
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

      <label htmlFor="number">Card Number</label>
      <input
        type="text"
        name="number"
        id="number"
        placeholder="e.g. 1234 5678 9123 0000"
        onChange={handleChange}
        value={dataCard.number}
      />

      <div className={styles.cardData}>
        <div>
          <label htmlFor="month">Exp. Date (MM/YY)</label>
          <label htmlFor="cvc">CVC</label>
        </div>
        <div className={styles.group}>
          <input
            type="number"
            name="month"
            id="month"
            placeholder="MM"
            onChange={handleChange}
            value={dataCard.month}
          />
          <input
            type="number"
            name="year"
            id="year"
            placeholder="YY"
            onChange={handleChange}
            value={dataCard.year}
          />
          <input
            type="number"
            name="cvc"
            id="cvc"
            placeholder=" e.g. 123"
            onChange={handleChange}
            value={dataCard.cvc}
          />
        </div>
      </div>
      <button type="submit">Confirm</button>
    </form>
  );
}

export default Form;
