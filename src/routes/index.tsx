import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../components/Home';
import SelectType from '../components/Plans/SelectType';
import GlobalPlanBase from '../components/Plans/GlobalPlanBase';
import HeaderBar from '../components/Header';

const routes = (
    <div>
        <HeaderBar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/plan/selectType" component={SelectType} />
            <Route path="/plan/new" component={GlobalPlanBase} />
        </Switch>
    </div>
)

export default routes