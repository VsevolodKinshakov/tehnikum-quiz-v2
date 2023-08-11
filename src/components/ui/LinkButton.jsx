import React from "react";
import { Link } from "react-router-dom"

export const LinkButton = ({ linkPath, isDisabled, onClick }) => {
    return (
        <Link to={linkPath}>
            <button disabled={isDisabled}>Далее</button>
            { onClick }
        </Link>
    )
}

export default LinkButton
