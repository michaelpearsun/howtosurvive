import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import HowToSurviveInfo from './HowToSurviveInfoComponent';
import { View } from 'react-native';
import { SURVIVEANYTHING } from '../shared/surviveanything';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            surviveanything: SURVIVEANYTHING,
            selectedSurvive: null
        };
    }

    onSurviveSelect(surviveId) {
        this.setState({selectedSurvive: surviveId});
    }

    render() {
        return(
            <View style={{flex: 1}}>
                <Directory 
                    surviveanything={this.state.surviveanything} 
                    onPress={surviveId => this.onSurviveSelect(surviveId)}
                />
                <HowToSurviveInfo 
                    survive ={this.state.surviveanything.filter(
                        survive => survive.id === this.state.selectedSurvive)[0]}
                />
            </View>
        )
    }
}

export default Main;