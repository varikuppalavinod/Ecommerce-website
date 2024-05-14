
import React, { useState } from 'react';
import classes from './AlertExample.module.css'; // Import the CSS file for styling

const AlertExample = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  return (
    <div>
      <button onClick={handleShowAlert}>Show Alert</button>
      {showAlert && (
        <div className={classes.alert}>
          <span>This is an alert!</span>
          
          <button onClick={handleCloseAlert} className={classes.button}>Close</button>
          
        </div>
      )}
    </div>
  );
};

export default AlertExample;
