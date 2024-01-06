import styles from "./front.module.scss";
import PropTypes from "prop-types";

function Front({ dataCard }) {
  let result;


  if (dataCard.number) {
    const numero = dataCard.number;
    result = numero.match(/.{1,4}/g).join(" "); // This add a space each 4 charaters
  }

  return (
    <div className={styles.frontContainer}>
      <img
        className={styles.icon}
        src="./images/card-logo.svg"
        alt="icono"
        height={"30px"}
        width={"60px"}
      />
      <h2> {dataCard.number ? result : "0000 0000 0000 0000"}</h2>

      <div className={styles.textContainer}>
        <p>{dataCard.name ? dataCard.name : "Jane Appleseed"}</p>
        <p>{(dataCard.month && dataCard.year) ? `${dataCard.month}/${dataCard.year}`: "00/00"} </p>
      </div>
    </div>
  );
}

Front.propTypes = {
  dataCard: PropTypes.object
  }




export default Front;
