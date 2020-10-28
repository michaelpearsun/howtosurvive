import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { SURVIVEANYTHING } from '../shared/surviveanything';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surviveanything: SURVIVEANYTHING
        };
    }

    render() {
        return <Directory surviveanything={this.state.surviveanything} />;
    }
}

export default Main;