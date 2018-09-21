import React, {Component} from 'react';
import {Route, Switch } from 'react-router-dom';

import Home from './components/home/home';
import Registration from './components/registration/registraton'
import Layout from './hoc/layout/layout';

class Routes extends Component {
    render(){
        return(
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/registration" exact component={Registration}/>
                </Switch>
            </Layout>
        )
    }
}

export default Routes;