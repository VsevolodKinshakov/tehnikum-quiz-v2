import React from "react";

const QuestionVariant = ({ variantId, labelText }) => {
  return (
    <li className="variant-wrapper">
      <input required type="radio" name="variant" id={variantId} />
      <label htmlFor={variantId}>{labelText}</label>
    </li>
  );
};

export default QuestionVariant;