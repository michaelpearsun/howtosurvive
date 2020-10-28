import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';

function RenderSurvive({survive}) {
    if (survive) {
        return (
            <Card 
                featuredTitle={survive.name}
                image={require('./images/scarybear.jpg')}
            >
                <Text style={{margin: 10}}>
                    {survive.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}


function HowToSurviveInfo(props) {
    return <RenderSurvive survive={props.survive} />;
}

export default HowToSurviveInfo;
