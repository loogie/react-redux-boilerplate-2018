import React from 'react';
import { Route, Switch } from 'react-router';

import Home from './Home';

import './app.scss';

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = { };
    }

    render(){

        return (
            <div>
                <Switch>
                    <Route path="/" render={() => <Home /> } />
                </Switch>
            </div>
        )
    }
}

export default App;