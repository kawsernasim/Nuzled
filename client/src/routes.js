import React, {Component} from 'react';
import {Route, Switch } from 'react-router-dom';

import TeacherProfile from './components/teacher-profile/teacher-profile';
import Reg from './components/reg/reg';
import Layout from './hoc/layout/layout';

class Routes extends Component {
    render(){
        return(
            <Layout>
                <Switch>
                    <Route path="/" exact component={TeacherProfile}/>
                    <Route path="/registration" exact component={Reg}/>
                </Switch>
            </Layout>
        )
    }
}

export default Routes;