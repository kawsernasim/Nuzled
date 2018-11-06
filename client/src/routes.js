import React, {Component} from 'react';
import {Route, Switch, BrowserRouter } from 'react-router-dom';
import Layout from './hoc/layout/layout';

import Header from './components/header/header';

import Home from './components/home/home';
import TeacherProfile from './components/teacher-profile/teacher-profile';
import Reg from './components/reg/reg';


class Routes extends Component {
    render(){
        return(
            <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={Home}/>
                    <Route path="/registration" exact component={Reg}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default Routes;