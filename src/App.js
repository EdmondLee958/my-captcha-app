import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

function App() {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaValue) {
      // Submit form or execute desired action
      alert("Captcha verified!");
    } else {
      alert("Please complete the CAPTCHA");
    }
  };

  return (
    <div className="App">
      <h1>React CAPTCHA Example</h1>
      <form onSubmit={handleSubmit}>
        <ReCAPTCHA
          sitekey="6LduZSgqAAAAAB1R3RtfAmSGUFKSc-xsRrRtSWQL"
          onChange={handleCaptchaChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

