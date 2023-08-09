import { useLocation } from "react-router-dom";

export const useCurrentProgress = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const stepIndex = pathParts.findIndex(part => part.includes("step"));

  if (stepIndex !== -1) {
    const stepNumber = parseInt(pathParts[stepIndex + 1]);
    if (!isNaN(stepNumber)) {
      return stepNumber;
    }
  }
  
  return 0;
};
