import React from 'react';
import './star-render.scss';

const StarRender = (props) => {

    let numStars;
    let numEmptyStars;
    let boolEmpty;


    if (props.emptyStars === false) {
        boolEmpty = false;
    }
    else {
        boolEmpty = true;
    }

    if (props.value === 5) {
        numStars = 5;
    }
    else {
        numStars = props.value;
        numEmptyStars = 5 - (props.value);
    }

    const stars = []
    for (var i=0; i < props.value; i++) {
      stars.push(<img src="static/images/star-filled.svg" alt="" key={i} />)
    }

    if (numStars < 5 && boolEmpty === true) {
        for (var i=0; i < numEmptyStars; i++) {
            stars.push(<img src="/images/star-empty.svg" alt="" key={i} />)
        }
    }

    return stars;

}

export default StarRender;