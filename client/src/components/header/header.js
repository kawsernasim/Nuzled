import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, Row, Col, Grid } from 'react-bootstrap';


import style from './header.scss';

import NavigationItems from './navbar';
import Card from '../cards/card';

const logo = () => {
    return (
        <Navbar.Brand className="logo">
            <Link to="/">
                <img src="/static/images/logo-text.svg" alt="nuzled logo"/>
            </Link>
        </Navbar.Brand>
    )
}

const Header = () => {
    return (


            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    {logo()}
                </Navbar.Header>
                <Navbar.Toggle/>
                <NavigationItems/>
            </Navbar>

    )
}

export default Header;