import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

class AlbumsList extends Component {

    // life cycle method for classes extending Component
    componentDidMount() {
        console.log('component did mount is called');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums/').then(response => console.log(response));
    }

    render() {
        return (<View>
            <Text>Album list!! </Text>
            </View>);
    }
}

export default AlbumsList;
