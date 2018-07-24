import React from 'react';
import StarRender from '../ratings/star-render/star-render';
import './reviews.scss';

const Reviews = () => {
    return (
        <div>
            <div className = "review">
                <div className="reviewer-info">
                    <h5 className = "student-name">Jake </h5>
                    <div className = "review-stars">
                        <StarRender 
                            value = {5}
                            emptyStars = {false}
                        />
                    </div>

                    <h5>3 Sessions with Kawser</h5>
                </div>
                
                
                <p className="review-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed malesuada quam elit, nec vestibulum elit auctor nec. 
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                Nunc sit amet nulla semper, ultricies sapien sed, bibendum turpis. tur. Pellentesque at nunc nunc. 
                Nunc sit amet nulla semper, ultricies sapien sed, bibendum turpis. tur. Pellentesque at nunc nunc.
                </p>

            </div>
        </div>
    )
}

export default Reviews;