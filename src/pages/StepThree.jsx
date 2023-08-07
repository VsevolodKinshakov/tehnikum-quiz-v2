import React, { useState } from "react";
import Indicator from "../components/ui/Indicator";
import AppButton from "../components/ui/AppButton";
import { Heading } from "../typography/Heading";

const StepThree = ({ onStepChange }) => {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const variants = [
    { id: "variant-1", text: "Ваш ответ 1", imgSrc: "./img/laugh.png" },
    { id: "variant-2", text: "Ваш ответ 2", imgSrc: "./img/hearts.png" },
    { id: "variant-3", text: "Ваш ответ 3", imgSrc: "./img/smirk.png" },
    { id: "variant-4", text: "Ваш ответ 4", imgSrc: "./img/fright.png" },
  ];

  const handleVariantChange = (e) => {
    setSelectedVariant(e.target.id);
  };

  const isButtonDisabled = !selectedVariant;

  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <Indicator />
          <div className="question">
            <Heading headingType="h2" text="Супер интересный вопрос" />
            <ul className="emoji-variants">
              {variants.map((variant) => (
                <li className="variant-wrapper" key={variant.id}>
                  <input
                    required
                    type="radio"
                    name="variant"
                    id={variant.id}
                    checked={selectedVariant === variant.id}
                    onChange={handleVariantChange}
                  />
                  <label htmlFor={variant.id}>
                    <img src={variant.imgSrc} alt={variant.text} />
                    <p>{variant.text}</p>
                  </label>
                </li>
              ))}
            </ul>
            <AppButton
              isDisabled={isButtonDisabled}
              id="next-btn"
              buttonLabel="Далее"
              onClick={() => onStepChange(4)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
