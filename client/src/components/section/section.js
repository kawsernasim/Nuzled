import React from 'react';
import FontAwesome from 'react-fontawesome';
import './section.scss';

const Section = (props) => {

    const IconGenerator = () => {
        if (props.icon === "true") {
            if (props.fa === "true") {
                return(
                    <div>
                        <FontAwesome name = {props.icon} size="2x" className = "section-icon" />
                        <h4 className="section-title">{props.title}</h4>
                    </div>
                )
            }
            else {
                return (
                    <div>
                        <img className = "section-icon" src={"static/images/icons/" + props.iconSrc}  alt="icon" />
                        <h4 className="section-title">{props.title}</h4>
                    </div>
                )
            }    
        }
        else {
            return (
                <h4 className="section-title" style={{marginLeft: '0'}}>{props.title}</h4>
            )
            
        }
    }

    return (
        <div className = "section">
            {IconGenerator()}
            <div class="section-content">
                {props.children}
            </div>
        </div>
    )
}

export default Section;
