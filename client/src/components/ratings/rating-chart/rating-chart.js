import React from 'react';
import StarRender from '../star-render/star-render';

import './rating-chart.scss';

const RatingChart = () => {


    const stars = [];

    for (var i=5; i >= 1; i--) {
        stars.push(
            <div className = "chart">

                <div className="stars-row">
                    <div className="bar"></div>

                    <StarRender 
                        value = {i}
                        emptyStars = {false}
                        key = {i}
                        classname
                    />
                </div>
            </div>
        )
    }

    return stars;
  

}

export default RatingChart;