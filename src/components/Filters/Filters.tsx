import React from "react";
import styles from "./Filters.module.scss";

const Filters = () => {
  return (
    <div className='filters'>
      <h2>Filters</h2>

      <section className={styles.shapes}>
        <h4 className='text-blue'>Shapes</h4>

        <div className='row'>
          <button className={styles.btnRounded}>oval</button>
          <button className={styles.btnRounded}>oval</button>
          <button className={styles.btnRounded}>oval</button>
          <button className={styles.btnRounded}>oval</button>
          <button className={styles.btnRounded}>oval</button>
        </div>
      </section>

      <section className={styles.colors}>
        <h4 className='text-blue'>Colors</h4>
        <div className='row'>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
      </section>
    </div>
  );
};

export default Filters;
