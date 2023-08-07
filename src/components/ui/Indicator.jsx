import React from "react";

const Indicator = ({ currentStep }) => {
  const maxSteps = 4;

  if (currentStep === 5) {
    return null
  }

  return (
    <div className="indicator">
      <div className="indicator__text">
        <span className="indicator__description">Скидка за прохождение опроса:</span>
        <span className="indicator__value">15%</span>
      </div>
      <div className="indicator__progressbar">
        {Array.from({ length: maxSteps }).map((_, index) => (
          <div
            key={index}
            className={`indicator__unit ${currentStep >= index + 1 ? "_active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Indicator;
