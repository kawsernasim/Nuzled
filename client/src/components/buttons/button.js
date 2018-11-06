import React from 'react';
import './button.scss';

const Button = (props) => {
    return (
        <div>
            <a href={props.link}>
                <div className = "button">
                    <h3>{props.text}</h3>
                </div>
            </a>
        </div>
    )
}

export default Button;