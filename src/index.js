// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/main.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Welcome from './pages/Welcome';
import StepOne from './pages/StepOne';
import StepTwo from './pages/StepTwo';
import StepThree from './pages/StepThree';
import StepFour from './pages/StepFour';
import Thanks from './pages/Thanks';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Welcome />
  },
  {
    path: 'step-one',
    element: <StepOne />
  },
  {
    path: 'step-two',
    element: <StepTwo />
  },
  {
    path: 'step-three',
    element: <StepThree />
  },
  {
    path: 'step-four',
    element: <StepFour />
  },
  {
    path: 'step-five',
    element: <Thanks />
  },
]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
