import * as React from 'react';
import "../pages/App.css";

 
const Checkbox = ({ label }) => {
    return (
      <div>
        <label>
         <input type="checkbox"/> {label}
        </label>
      </div>
    );
  };
  export default Checkbox;