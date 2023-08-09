import React, { useState } from "react";
import Indicator from "../components/ui/Indicator";
import { Heading } from "../typography/Heading";
import { LinkButton } from "../components/ui/LinkButton";
import QuestionVariant from "../components/ui/QuestionVariant";

const StepFour = () => {
  const [selectedVariant, setSelectedVariant] = useState(null);
  const variants = [
    { id: "variant-1", text: "Это Жассур.aka" },
    { id: "variant-2", text: "Это синхофазотрон" },
    { id: "variant-3", text: "Это язык программирования" },
    { id: "variant-4", text: "????" },
    { id: "variant-5", text: "Шо за шлпяпа" },
    { id: "variant-5", text: "Смотри-ка работает 6 вариант" },

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
            <Heading headingType="h2" text="Ты почти подписал ИПОТЕКУ"/>
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
            {
              isButtonDisabled ?
              (<LinkButton linkPath='step-five' isDisabled={isButtonDisabled} />) :
              (<LinkButton linkPath="/step-five" />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepFour;
