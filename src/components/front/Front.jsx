import styles from "./front.module.scss";
import PropTypes from "prop-types";

function Front({ dataCard }) {

  return (
    <div className={styles.frontContainer}>
      <img
        className={styles.icon}
        src="./images/card-logo.svg"
        alt="icono"
        height={"30px"}
        width={"60px"}
      />
      <h2> {dataCard.number ? dataCard.number : "0000 0000 0000 0000"}</h2>

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
