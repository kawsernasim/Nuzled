import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './dropdown.scss';

class Dropdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            selected: this.props.options[0] || -1
        }
    }

    toggleMenu = () => {
        this.setState({
            active: !this.state.active
        })
    }

    handleClick = (i) => {
        this.setState({
            selected: this.props.options[i]
        })
    }

    renderOptions = () => {
        return this.props.options.map((item, i)=> {
            return(
                <li
                    onClick = {() => {
                        this.handleClick(i)
                        this.toggleMenu()
                    }}
                    key = {i}
                    className = {"dropdown__list-item " + (i === this.state.selected ? 'dropdown__list-item--active' : '')}
                >
                    {this.props.options[i]}
                    
                </li>
            )
        })
    }



    render() {
        return (
            <div className="dropdown">
                <div
                    onClick = {() => this.toggleMenu()}
                    className = "dropdown__toggle dropdown__list-item"
                >
                    <FontAwesome name="caret-down" className="dropdown__arrow" size="2x"/>
                    {this.state.selected}
                </div>

                <ul className={"dropdown__list " + (this.state.active ? 'dropdown__list--active' : '')}>{this.renderOptions()}</ul>            </div>
        )
    }
}

export default Dropdown;