import React, { Component } from 'react';
import './rating-bar.scss';
import StarRender from '../star-render/star-render';
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';

const Rating = (props) => {

    return (
        <div>
            <div className="rating-bar">
                <div className="rating-value">
                    <h5>{props.value}</h5>
                </div>

                <div className="stars">
                    <StarRender 
                        value = {props.value}
                        emptyStars = {props.emptyStars}
                    />
                </div>
            </div>
        </div>
    )
    
}

export default Rating;