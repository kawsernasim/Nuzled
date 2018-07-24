import React from 'react';
import './card.scss';

const Card = (props) => (
        <div className={
            (props.hover === true ? "card card-hover" : "card")
        } 
        style={{
            width: `${props.width}`,
            height: `${props.height}`
        }}>
            <div className="card-container">
                {props.children}
            </div>
        </div>
)


export default Card;