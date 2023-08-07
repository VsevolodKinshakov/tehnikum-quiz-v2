import React, { useState } from 'react';
import './styles/main.css';
import Welcome from './pages/Welcome';
import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import StepThree from './pages/StepThree';
import StepFour from './pages/StepFour';
import Thanks from './pages/Thanks';
import Indicator from './components/ui/Indicator'; // Импортируем компонент Indicator

function App() {
  const [step, setStep] = useState(0);

  const handleStepChange = (nextStep) => {
    setStep(nextStep);
  };

  return (
    <div className="App">
      <Indicator currentStep={step} />
      {step === 0 && <Welcome onStepChange={() => handleStepChange(1)} />}
      {step === 1 && <StepOne onStepChange={handleStepChange} />}
      {step === 2 && <StepTwo onStepChange={handleStepChange} />}
      {step === 3 && <StepThree onStepChange={handleStepChange} />}
      {step === 4 && <StepFour onStepChange={handleStepChange} />}
      {step === 5 && <Thanks onStepChange={handleStepChange} />}
    </div>
  );
}

export default App;
