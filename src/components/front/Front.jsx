import styles from "./front.module.scss"


function Front() {
  return (
    <div className={styles.frontContainer}>

        <img className={styles.icon} src="./src/images/card-logo.svg" alt="icono" height={'30px'} width={'60px'} />
        <h2>0000 0000 0000 0000</h2>
       
     
        <div className={styles.textContainer}>
        <p>Jane Appleseed</p>
        <p>00/00</p>
        </div>
       
        
        </div>
  )
}

export default Front