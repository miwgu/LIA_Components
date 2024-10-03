import React from 'react';
import styles from './Home.module.css'; 

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <header className={styles.header} style={{ marginTop: '220px' }}>
        <h1>Welcome to the LIA App</h1>
        <p className={styles.subtitle}>Bringing students and companies together for successful internships</p>
      </header>
      <section className={styles.features}>
        <div className={styles.featureCard}>
          <h2>Find Your Perfect Internship</h2>
          <p>Search through a variety of companies offering internships tailored to your studies and career goals.</p>
        </div>
        <div className={styles.featureCard}>
          <h2>Connect with Companies</h2>
          <p>Create your profile, showcase your skills, and let companies find you for exciting internship opportunities.</p>
        </div>
        <div className={styles.featureCard}>
          <h2>Track Your Application</h2>
          <p>Stay updated with the status of your internship applications and communicate directly with employers.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
