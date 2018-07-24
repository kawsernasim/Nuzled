import React from 'react';
import './rank.scss';

const Rank = () => {
    return (
        <div>
            <div className="satisfaction-rate">
                <h4>100% satisfaction</h4>
                <div className="satisfaction-bar"></div>
                <div className="rank-icon">
                    <img src="static/images/icons/top-ranked.svg" alt=""/>
                    <h5 className="rank-title">Top Ranked</h5>
                </div>
            </div>

        </div>
    )
}

export default Rank;