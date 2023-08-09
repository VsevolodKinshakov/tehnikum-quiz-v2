import React, { useState } from "react";
import { Heading } from "../typography/Heading";
import { AppInput } from "../components/ui/AppInput";
import { LinkButton } from "../components/ui/LinkButton";

const Welcome = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const isButtonDisabled = !name || !number;

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

  const handleNumberInput = (e) => {
    setNumber(e.target.value);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
          <Heading headingType="h1" text="Добро пожаловать в квиз от лучшего учебного центра" />
          <div className="welcome__form">
            <AppInput
              required={true}
              type="text"
              name="username"
              id="username"
              placeholder="Ваш ответ"
              labelText="Ваше имя"
              errText="Введите имя"
              value={name}
              onInput={handleNameInput}
            />
            <AppInput
              required={true}
              type="tel"
              name="phone"
              id="phone"
              placeholder="+998 9- --- -- --"
              pattern="^(?:\+998)?(?:\d{2})?(?:\d{7})$"
              errText="Введите номер в правильном формате например +998 9- --- -- --"
              value={number}
              onInput={handleNumberInput}
            />
            {
              isButtonDisabled ?
              (<LinkButton linkPath='step-one' isDisabled={isButtonDisabled} />) :
              (<LinkButton linkPath="step-one" />)
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
