import React, { useState } from "react";
import { Indicator } from "../components/ui/Indicator";
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

  // ВАРИАНТ ГИЕСА
  // const StepTwo = () => {
  //   const options = [
  //     {
  //       id: Math.floor(Math.random() * 1000),
  //       text: 'Ваш ответ 1'
  //     },
  //     {
  //       id: Math.floor(Math.random() * 1000),
  //       text: 'Ваш ответ 2'
  //     },
  //     {
  //       id: Math.floor(Math.random() * 1000),
  //       text: 'Ваш ответ 3'
  //     },
  //     {
  //       id: Math.floor(Math.random() * 1000),
  //       text: 'Ваш ответ 4'
  //     },
  //   ]
  // }

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
             {/* options.map(element => (
              <AnswerOption key={elemet.id} id={element.id} labelText={element.text} />
            ))  */}
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