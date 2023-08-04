import React, { useState } from "react";
import { Indicator } from "../components/ui/Indicator";
import AppButton from "../components/ui/AppButton";
import { AppInput } from "../components/ui/AppInput";

const StepOne = ({ onStepChange }) => {
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
            <h2>КАК ОНО РАБОТАЕТ?</h2>
            <AppInput
              required
              type="text"
              name="answer"
              placeholder="Ваш ответ"
              errText="Введите ответ"
              value={answer}
              onInput={handleAnswerInput}
            />
            <AppButton
              isDisabled={isButtonDisabled}
              id="next-btn"
              buttonLabel="Далее"
              onClick={() => onStepChange(2)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
