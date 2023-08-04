import React from "react";

export const AppInput = ({ 
    required,
    type,
    name,
    id,
    placeholder,
    pattern,
    labelText,
    errText,
    ...props
}
) => {
    return (
        <label className="input-wrapper" htmlFor={id}>
            {labelText}
            <input
                required={required}
                type={type}
                name={name}
                id={id}
                placeholder={placeholder}
                pattern={pattern}
                {...props}
            />
            <span id="error-message">
                {errText}
            </span>
        </label>
    )
}