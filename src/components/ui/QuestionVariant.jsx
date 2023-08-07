import React from "react";

const QuestionVariant = ({ variantId, labelText, checked, onChange }) => {
  return (
    <li className="variant-wrapper">
      <input required 
      type="radio" 
      name="variant" 
      id={variantId} 
      checked={checked}
      onChange={onChange}
      />
      <label htmlFor={variantId}>{labelText}</label>
    </li>
  );
};

export default QuestionVariant;
