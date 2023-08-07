import React, { useState } from "react";
import Indicator from "../components/ui/Indicator";
import AppButton from "../components/ui/AppButton";
import QuestionVariant from "../components/ui/QuestionVariant";
import { Heading } from "../typography/Heading";
// import { AnswerOption } from "../components/AnswerOption";


const StepTwo = ({ onStepChange }) => {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const variants = [
    { id: "variant-1", text: "Это Жассур.aka" },
    { id: "variant-2", text: "Это синхофазотрон" },
    { id: "variant-3", text: "Это язык программирования" },
    { id: "variant-4", text: "????" },
  ];

  const handleVariantChange = (e) => {
    setSelectedVariant(e.target.id);
  };

  const isButtonDisabled = !selectedVariant;

  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <Indicator />
          <div className="question">
            <Heading headingType="h2" text="ЧЕ ТАКОЕ JS ТВОЮ МЕДЬ"/>
            <ul className="variants">
              {variants.map((variant) => (
                <QuestionVariant
                  key={variant.id}
                  variantId={variant.id}
                  labelText={variant.text}
                  onChange={handleVariantChange}
                  checked={selectedVariant === variant.id}
                />
              ))}
            </ul>
            <AppButton
              isDisabled={isButtonDisabled}
              buttonLabel="Далее"
              onClick={() => onStepChange(3)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
