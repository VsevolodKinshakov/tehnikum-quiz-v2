import React, { useState } from "react";
import Indicator from "../components/ui/Indicator"; // Подключите компонент Indicator
import { AppInput } from "../components/ui/AppInput"; // Подключите компонент AppInput
import { LinkButton } from "../components/ui/LinkButton"; // Подключите компонент LinkButton
import { Heading } from "../typography/Heading";
import { useCurrentProgress } from "../hooks/useCurrentProgress";

const StepOne = () => {
  const [answer, setAnswer] = useState("");

  const isButtonDisabled = !answer;

  const handleAnswerInput = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <Indicator />
          <div className="question">
            <Heading headingtype="h2" text="КАК ОНО РАБОТАЕТ?"/>
            <AppInput
              required
              type="text"
              name="answer"
              placeholder="Ваш ответ"
              errText="Введите ответ"
              value={answer}
              onInput={handleAnswerInput}
            />
            {
              isButtonDisabled ?
              (<LinkButton linkPath='step-two' isDisabled={isButtonDisabled} />) :
              (<LinkButton linkPath="/step-two" />)
            }
          </div>
        </div>
      </div>
    </div>
  );
};
export default StepOne;
