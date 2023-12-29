import styles from './back.module.scss'
import PropTypes from "prop-types";

function Back({cvc}) {
  return (
    <div className={styles.backContainer}>
        <p>{cvc? cvc : "000"}</p>
    </div>
  )
}

Back.propTypes = {
cvc: PropTypes.string
}

export default Back