import React from "react";
import { useNavigate } from "react-router-dom";
import Indicator from "../components/ui/Indicator";
import AppInput from "../components/ui/AppInput";
import AppButton from "../components/ui/AppButton";
import Heading from "../typography/Heading";
import useCurrentProgress from "../hooks/useCurrentProgress";


const StepOne = () => {
  const currentProgress = useCurrentProgress()
  const navigate = useNavigate()

  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <Indicator progress={currentProgress} />
          <div className="question">
            <Heading headingType="h2" text="1. Занимательный вопрос" />
            <AppInput 
              id="question-one" 
              required={true} 
              type="text" 
              name="answer" 
              placeholder="Ваш ответ"
              errText="Введите номер в правильном формате"
            />
            <AppButton 
              isDisabled={false} 
              buttonLabel="Далее" 
              onClick={() => navigate('/step-two')} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepOne;
