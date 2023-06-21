// Pagination.js
import React from "react";
import style from "./Pagination.module.css";

const Pagination = ({ handlePrevious, handleNext }) => {
  return (
    <div className={style.backNext}>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Pagination;
