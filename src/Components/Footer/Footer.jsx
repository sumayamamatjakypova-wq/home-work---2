import React from 'react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.newsletter}>
          <h2 className={styles.newsletterTitle}>
            STAY UP TO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className={styles.newsletterForm}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className={styles.newsletterInput} 
            />
            <button className={styles.newsletterBtn}>Subscribe to Newsletter</button>
          </div>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.brandInfo}>
            <div className={styles.logo}>SHOP.CO</div>
            <p className={styles.brandDesc}>
              We have clothes that suit your style and which you’re proud to wear. From headroom to toe.
            </p>
            <div className={styles.socials}>
              <span className={styles.socialIcon}></span>
              <span className={styles.socialIcon}></span>
              <span className={styles.socialIcon}></span>
              <span className={styles.socialIcon}></span>
            </div>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>COMPANY</h4>
              <a href="#about">About</a>
              <a href="#features">Features</a>
              <a href="#works">Works</a>
              <a href="#career">Career</a>
            </div>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>HELP</h4>
              <a href="#support">Customer Support</a>
              <a href="#delivery">Delivery Details</a>
              <a href="#terms">Terms & Conditions</a>
              <a href="#privacy">Privacy Policy</a>
            </div>
            <div className={styles.linkColumn}>
              <h4 className={styles.columnTitle}>FAQ</h4>
              <a href="#account">Account</a>
              <a href="#manage">Manage Deliveries</a>
              <a href="#orders">Orders</a>
              <a href="#payments">Payments</a>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            Shop.co © 2000-2026, All Rights Reserved
          </p>
          <div className={styles.payments}>
            <span className={styles.cardBadge}>Visa</span>
            <span className={styles.cardBadge}>Mastercard</span>
            <span className={styles.cardBadge}>PayPal</span>
            <span className={styles.cardBadge}>Apple Pay</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
