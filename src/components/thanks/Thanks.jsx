import styles from './thanks.module.scss'

function Thanks() {
  return (
    <div className={styles.thanksContainer}>
        <picture> <img src="../src/images/icon-complete.svg" alt="" height={'80px'} width={'80px'} /></picture>
      
       <h2 className={styles.title}>Thank you!</h2>
       <p>We&apos;ve added your card details</p>
       <button onClick={() => window.location.reload()}>Continue</button>
    </div>
  )
}

export default Thanks