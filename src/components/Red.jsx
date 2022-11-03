import React, { useRef } from "react";

const Red = () => {
 const togglerRef = useRef(null);

 const buttonClickHandler = () => {
  alert("button clicked");
 };

 togglerRef.current.click();

 return (
  <div>
   <button ref={togglerRef} onClick={buttonClickHandler}>
    toggle button
   </button>
  </div>
 );
};

export default Red;