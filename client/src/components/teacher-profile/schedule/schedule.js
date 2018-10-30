import React, { Component } from 'react';
import './schedule.scss';

const BarRender = () => {
    const bar = []

    for (var i = 0; i < 4; i++) {
        bar.push(
            <div className = "quarter-section">
                <div className="quarter-time" key={i}>
                    <h6>{ (i === 0) ? '12:00 AM' : (i === 1) ?  '6:00 AM' : (i === 2) ? '12:00 PM' : (i === 3) ? '6:00 PM' : '' } </h6>
                </div>
                <div className="quarter-bar" key={i}>
                    {BoxRender()}
                </div>
            </div>
        )
    }

    return bar;
}
const BoxRender = () => {
    const box = []
    
        for (var j=0; j < 6; j++) {
            box.push(<div className = "hour-boxes" key={j}></div>)
        }

    return box;
}

class Schedule extends Component {
    render() {
        
        return (
            <div>
               {BarRender()}
            </div>
        )
    }
}

export default Schedule;