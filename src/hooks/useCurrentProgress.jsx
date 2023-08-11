import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useCurrentProgress = () => {
  const [progress, setProgress] = useState(0)
  const location = useLocation()
  useEffect(() => {


    switch (location.pathname) {
      case '/step-one':
        setProgress(1)
        break;
      case '/step-two':
        setProgress(2)
        break;
      case '/step-three':
        setProgress(3)
        break;
      case '/step-four':
        setProgress(4)
        break;

      default:
        setProgress(0)
    }
  }, [location.pathname])

  return progress
}

export default useCurrentProgress
