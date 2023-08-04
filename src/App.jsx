import React, { useState } from 'react';
import './styles/main.css';
import Welcome from './pages/Welcome';
import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';

function App() {
  const [step, setStep] = useState(0);

  const handleStepChange = (nextStep) => {
    setStep(nextStep);
  };

  return (
    <div className="App">
      {step === 0 && <Welcome onStepChange={() => handleStepChange(1)} />}
      {step === 1 && <StepOne onStepChange={handleStepChange} />}
      {step === 2 && <StepTwo onStepChange={handleStepChange} />}
    </div>
  );
}

export default App;