
import React from 'react';

const Alert = ({ message, isError}) => {
  return (
    <div className={isError ? "error" : "exito"}>
      {message}
    </div>
  );
}

export default Alert;