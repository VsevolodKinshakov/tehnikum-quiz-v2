const AppButton = ({ onClick, buttonLabel = '', isDisabled, type, id, ...props }) => {
  return (
    <button 
      disabled={isDisabled}
      type={type} 
      onClick={onClick} 
      id="next-btn"
      {...props}
    >
      {buttonLabel}
    </button>
  )
}

export default AppButton;