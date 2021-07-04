import React from 'react'
import styles from './View.module.scss'

const View = () => {
  return (
    <div className={styles.view}>
      <h3>All cards. (9)</h3>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.object}>1</div>
        </div>
        <div className={styles.card}>
          <div className={styles.object}>2</div>
        </div>
        <div className={styles.card}>
          <div className={styles.object}>3</div>
        </div>
        <div className={styles.card}>
          <div className={styles.object}>4</div>
        </div>
        <div className={styles.card}>
          <div className={styles.object}>5</div>
        </div>
        <div className={styles.card}>
          <div className={styles.object}>6</div>
        </div>
        <div className={styles.card}>
          <div className={styles.object}>7</div>
        </div>
        <div className={styles.card}>
          <div className={styles.object}>8</div>
        </div>
      </div>
    </div>
  )
}

export default View
