import React from "react";

const QuestionVariant = ({ variantId, labelText, checked }) => {
  return (
    <li className="variant-wrapper">
      <input required 
      type="radio" 
      name="variant" 
      id={variantId} 
      checked={checked}
      />
      <label htmlFor={variantId}>{labelText}</label>
    </li>
  );
};

export default QuestionVariant;