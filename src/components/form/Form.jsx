
import styles from "./form.module.scss"




function Form() {
  return (
    <form className={styles.cardForm}>
      <label htmlFor="name">Cardholder Name</label>
      <input
        type="text"
        id="Name"
        name="name"
        placeholder="e.g. Jane Appleseed"
      />

      <label htmlFor="number">Card Number</label>
      <input
        type="text"
        name="number"
        id="number"
        placeholder="e.g. 1234 5678 9123 0000"
      />

      <div className={styles.cardData}>
        <div>
        <label htmlFor="month">Exp. Date (MM/YY)</label>
        <label htmlFor="cvc">CVC</label>
        </div>
        <div>
        <input type="number" name="month" id="month" placeholder="MM" />
        <input type="number" name="year" id="year" placeholder="YY" />
        <input type="number" name="cvc" id="cvc" placeholder=" e.g. 123" />
        </div>
       
     
      </div>
      <button type="submit">Confirm</button>
    </form>
  );
}

export default Form;
