import React, { useState } from "react";

const GDPRConsent = () => {
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  const handleConsent = () => {
    setIsConsentGiven(true);
  };

  if (!isConsentGiven) {
    return (
      <div>
        <p>
          We use cookies to personalize content and ads, to provide social media
          features and to analyze our traffic. We also share information about
          your use of our site with our social media, advertising and analytics
          partners who may combine it with other information that you’ve
          provided to them or that they’ve collected from your use of their
          services.
        </p>
        <button onClick={handleConsent}>I consent</button>
      </div>
    );
  } else {
    return null;
  }
};

export default GDPRConsent;
