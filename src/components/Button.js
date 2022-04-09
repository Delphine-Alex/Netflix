import React from 'react';

const Button = (props) => {
    return (
        <>
            <button type={props.type} className={props.classes} onClick={props.function}>
                {props.icon} {props.title}
            </button>
        </>
    );
}

export default Button;
