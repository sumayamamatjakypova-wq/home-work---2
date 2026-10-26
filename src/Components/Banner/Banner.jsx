import React from 'react';
import styles from './Banner.module.css';

export const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            FIND CLOTHES THAT MATCH YOUR STYLE
          </h1>
          <p className={styles.description}>
            Browse through our diverse range of meticulously crafted garments, designed 
            to bring out your individuality and cater to your sense of style.
          </p>
          <button className={styles.ctaButton}>Shop Now</button>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>200+</span>
              <span className={styles.statLabel}>International Brands</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>2,000+</span>
              <span className={styles.statLabel}>High-Quality Products</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>30,000+</span>
              <span className={styles.statLabel}>Happy Customers</span>
            </div>
          </div>
        </div>
        
        <div className={styles.visual}>
          <div className={styles.imagePlaceholder}>
            <span className={styles.sparkleLeft}></span>
            <span className={styles.sparkleRight}></span>
          </div>
        </div>
      </div>
    </section>
  );
};
