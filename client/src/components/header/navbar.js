import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import style from './header.scss';

const NavigationItems = () => {

    const items = [
        {
            type: 'nav-items',
            text: 'Home',
            link: '/'
        },
        {
            type: 'nav-items',
            text: 'Login',
            link: '/'
        },
        {
            type: 'nav-items',
            text: 'Sign-up',
            link: '/'
        }
    ]

    const addItems = () => {
        return items.map( (item, i) => {
            return (
                
                    <NavItem eventKey={i} componentClass={Link} to={item.link}>
                        {item.text}
                    </NavItem>
                
            )
        }) 
    }

    return (
        <div>
            <Navbar.Collapse>
                <Nav pullRight>
                    {addItems()}
                </Nav>
            </Navbar.Collapse>
        </div>
    )
}

export default NavigationItems;