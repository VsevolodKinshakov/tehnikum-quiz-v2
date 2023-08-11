import React from "react";

export const AnswerOption = ({ id, labelText, checked, onChange, imgSrc }) => {
  return (
    <li className="variant-wrapper">
      <input
        required
        type="radio"
        name="variant"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>
        {labelText}
        {imgSrc && <img src={imgSrc} alt={labelText} />}
      </label>
    </li>
  )
}

export default AnswerOption

