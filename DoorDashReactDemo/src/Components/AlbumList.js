import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumsList extends Component {

    componentWilMount() {
        console.log('componentWilMount is called now');
    }

    render() {
        return (<View>
            <Text>Album list!! </Text>
            </View>);
    }
}

export default AlbumsList;
