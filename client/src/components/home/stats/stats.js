import React from 'react';
import './stats.scss'

const Stats = (props) => {

    const subitems = [
        {
            subtitle: 'Bengali',
            stat: 'Native'
        },
        {
            subtitle: 'English',
            stat: 'Fluent'
        }
    ]

    
    const Subcatgeogies = () => {
        if (props.sub === true) {
            console.log(props.subitems)
            return subitems.map(  (subitems, i) => {
                return (
                    <h5 className="stat" key={i}><span key={i}>{subitems.subtitle}: </span>{subitems.stat}</h5>
                )
            })
        }
        else {
            return (
                <div>
                    <h5 className="stat">{props.stat}</h5>
                </div>
            )
        }
    }


    return (
        <div class="accomplishments">
            <h4>{props.title}</h4>
            {Subcatgeogies()}
        </div>
    )
}

export default Stats;