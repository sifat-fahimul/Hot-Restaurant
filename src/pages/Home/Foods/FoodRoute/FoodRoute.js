import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BreakFast from '../BreakFast/BreakFast';
import Dinner from '../Dinner/Dinner';
import FoodNav from '../FoodNav/FoodNav';
import Lunch from '../Lunch/Lunch';

const FoodRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <FoodNav></FoodNav>
                <Switch>
                    <Route exact path='/'>
                        <BreakFast></BreakFast>
                    </Route>
                    <Route path='/home'>
                        <BreakFast></BreakFast>
                    </Route>
                    <Route path='/breakfast'>
                        <BreakFast></BreakFast>
                    </Route>
                    <Route path='/dinner'>
                        <Dinner></Dinner>
                    </Route>
                    <Route path='/lunch'>
                        <Lunch></Lunch>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default FoodRoute;