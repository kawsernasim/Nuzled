import React, { Component } from 'react';
import { Grid, Row, Col, Clearfix } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import './accordion-plus.scss';



class Accordion extends Component {

    constructor(props) {
        super (props);
        this.state = {
            class: "content",
            showContent: false,
            icon: "plus"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // this.setState( prevState => ({
        //   showContent: !prevState.showContent
        // }));

        if (this.state.showContent === false) {
            this.setState({
                showContent: true,
                class: "content open",
                icon: "minus"
            })
        }
        else {
            this.setState({
                showContent: false,
                class: "content",
                icon: "plus"
            })

        }

    }

    // toggleAcc = (action) => {
    //     this.setState({
    //         showContent: action
    //     })
    // }

    render() {
        return(
            <div>
                <div className = "accordion">    
                    <div 
                        className = "dot"
                        onClick = {this.handleClick}
                    >
                        <FontAwesome 
                            name={this.state.icon}
                            size = "1x" 
                            style={{margin: '6px 7px 6px 7px'}}
                        />
                    </div>

                    <div className="title"><h4>{this.props.title}</h4></div>
                </div>

                <div className = {this.state.class}>
                    <div className = "content-wrapper">
                        {this.props.children}
                    </div>
                    
                </div>



            </div>
        )
    }
}

export default Accordion;