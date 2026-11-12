
import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');

    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleConsent = (choice) => {
    localStorage.setItem('cookieConsent', choice);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-overlay">
      <div className="cookie-popup">

        <div className="cookie-icon">🍪</div>

        <div className="cookie-content">
          <span className="cookie-label">
            YOUR PRIVACY MATTERS
          </span>

          <h2>
            We Use <span>Cookies</span>
          </h2>

          <p>
            We use cookies to improve your browsing experience,
            analyze website traffic, and understand how visitors
            interact with our website.
          </p>

          <p>
            By clicking "Accept All", you agree to our use of
            cookies. You can also reject optional cookies.
          </p>

          <div className="cookie-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <span>•</span>
            <a href="/cookie-policy">Cookie Policy</a>
          </div>
        </div>

        <div className="cookie-actions">
          <button
            className="cookie-accept"
            onClick={() => handleConsent('accepted')}
          >
            Accept All Cookies
          </button>

          <button
            className="cookie-reject"
            onClick={() => handleConsent('rejected')}
          >
            Reject Optional
          </button>
        </div>

        <div className="cookie-footer">
          <span>YOUR PRIVACY. YOUR CHOICE.</span>
        </div>

      </div>
    </div>
  );
}

export default CookieConsent;
    
