import React from 'react';
//import {bindActionCreators} from 'redux';
//import {connect} from 'react-redux';

import './home.scss';

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = { };
    }

    render(){

        return (
            <div>
                <h1>Welcome</h1>
            </div>
        )
    }
}

export default Home;