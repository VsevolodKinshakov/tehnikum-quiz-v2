import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Indicator from '../components/ui/Indicator'
import Heading from "../typography/Heading";
import AppButton from "../components/ui/AppButton";
import useCurrentProgress from "../hooks/useCurrentProgress";
import AnswerOption from "../components/ui/AnswerOption";


const StepTwo = () => {
  const [checkedAnswer, setCheckedAnswer] = useState(null)
  const currentProgress = useCurrentProgress()
  const navigate = useNavigate()

  const handleCheck = (answerId) => {
    setCheckedAnswer(answerId)
  }

  const options = [
    {
      id: 'answer-option-1',
      text: 'Ваш ответ 1'
    },
    {
      id: 'answer-option-2',
      text: 'Ваш ответ 2'
    },
    {
      id: 'answer-option-3',
      text: 'Ваш ответ 3'
    },
    {
      id: 'answer-option-4',
      text: 'Ваш ответ 4'
    }
  ]

  return (
    <div className="container">
    <div className="wrapper">
      <div className="variants-quiz">
        <Indicator progress={currentProgress} />
        <div className="question">
          <Heading headingType="h2" text="1. Занимательный вопрос" />
          <ul className="variants">
            {
              options.map(element => (
                <AnswerOption
                  key={element.id} 
                  id={element.id} 
                  labelText={element.text}
                  checked={checkedAnswer === element.id}
                  onChange={() => handleCheck(element.id)}
                />
              ))
            }
          </ul>
          <AppButton 
            isDisabled={!checkedAnswer} 
            buttonLabel="Далее" 
            onClick={() => navigate('/step-three')}
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default StepTwo;
