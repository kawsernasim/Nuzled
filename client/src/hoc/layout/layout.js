import React, { Component } from 'react';
import Header from '../../components/header/header';
import TeacherProfile from '../../components/teacher-profile/teacher-profile';
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
                Footer
            </div>
        )
    }
}

export default Layout;
