const AppButton = ({ buttonLabel, isDisabled, type, ...props }
  ) => {
  return (
    <button 
      disabled={isDisabled}
      type={type} 
      id="next-btn"
      {...props}
    >
      {buttonLabel}
    </button>
  )
}

export default AppButton
