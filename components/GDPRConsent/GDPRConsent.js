import React, { useState } from 'react';
import styles from './GDPR.module.css';

function GDPRConsent() {
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  const handleConsent = () => {
    setIsConsentGiven(true);
  };

  if (!isConsentGiven) {
    return (
      <div className={styles.gdpr_container}>
        <p className={styles.text}>
          We use cookies to personalize content and ads, to provide social media
          features and to analyze our traffic. We also share information about
          your use of our site with our social media, advertising and analytics
          partners who may combine it with other information that you’ve
          provided to them or that they’ve collected from your use of their
          services.
        </p>
        <button type="button" onClick={handleConsent}>I consent</button>
      </div>
    );
  }
  return null;
}

export default GDPRConsent;
