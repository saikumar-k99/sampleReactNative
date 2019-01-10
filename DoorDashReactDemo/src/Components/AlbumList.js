import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumsList extends Component {

    state = { albums: [] };
    // life cycle method for classes extending Component
    componentDidMount() {
        console.log('component did mount is called');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums/').then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} propAlbum={album} />);
    }

    render() {
        console.log(this.state);
        return (<View>
            {this.renderAlbums()}
            </View>);
    }
}

export default AlbumsList;
