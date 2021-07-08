import React from 'react'
import styles from "./home.module.scss";
import Filters from '../../components/Filters/Filters';
import View from '../../components/View/View';

const Home = () => {
  return (
    <div className={styles.home}>
      <Filters />
      <View />
    </div>
  );
};

export default Home;
