import React from 'react';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>SHOP.CO</div>
        
        <nav className={styles.nav}>
          <a href="#shop" className={styles.navLink}>Shop</a>
          <a href="#on-sale" className={styles.navLink}>On Sale</a>
          <a href="#new-arrivals" className={styles.navLink}>New Arrivals</a>
          <a href="#brands" className={styles.navLink}>Brands</a>
        </nav>

        <div className={styles.searchWrapper}>
          <input 
            type="text" 
            placeholder="Search for products..." 
            className={styles.searchInput} 
          />
        </div>

        <div className={styles.actions}>
          <button className={styles.actionBtn} aria-label="Cart"></button>
          <button className={styles.actionBtn} aria-label="Profile"></button>
        </div>
      </div>
    </header>
  );
};
