import React, { useState } from "react";
import Indicator from "../components/ui/Indicator";
import AppButton from "../components/ui/AppButton";
import Heading from "../typography/Heading";
import useCurrentProgress from "../hooks/useCurrentProgress";
import { useNavigate } from "react-router-dom";
import AnswerOption from "../components/ui/AnswerOption";


const StepThree = () => {

  const [checkedAnswer, setCheckedAnswer] = useState(null)
  const currentProgress = useCurrentProgress()
  const navigate = useNavigate()

  const handleCheck = (answerId) => {
    setCheckedAnswer(answerId)
  }

  const options = [
    {
      id: 'answer-option-1',
      text: 'Ваш ответ 1',
      imgSrc: "./img/laugh.png"
    },
    {
      id: 'answer-option-2',
      text: 'Ваш ответ 2',
      imgSrc: "./img/hearts.png"
    },
    {
      id: 'answer-option-3',
      text: 'Ваш ответ 3',
      imgSrc: "./img/fright.png"
    },
    {
      id: 'answer-option-4',
      text: 'Ваш ответ 4',
      imgSrc: "./img/smirk.png"
    }
  ]

  return (
    <div className="container">
    <div className="wrapper">
      <div className="variants-quiz">
        <Indicator progress={currentProgress} />
        <div className="question">
          <Heading headingType="h2" text="1. Занимательный вопрос" />
          <ul className="emoji-variants">
            {
              options.map(element => (
                <AnswerOption 
                  key={element.id} 
                  id={element.id} 
                  labelText={element.text}
                  imgSrc={element.imgSrc}
                  checked={checkedAnswer === element.id}
                  onChange={() => handleCheck(element.id)}
                />
              ))
            }
          </ul>
            <AppButton 
            isDisabled={!checkedAnswer} 
            buttonLabel="Далее" 
            onClick={() => navigate('/step-four')}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
