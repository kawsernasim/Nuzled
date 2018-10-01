import React, { Component } from 'react';
import Header from '../../components/header/header';
import Home from '../../components/home/home';
import Reg from '../../components/reg/reg';


class Layout extends Component {
    state ={

    }

    render() {
        return (
            <div>
                <Header/>
                <Home/>
                <Reg/>
                
                Footer
            </div>
        )
    }
}

export default Layout;
