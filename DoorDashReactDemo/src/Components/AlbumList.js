import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumsList extends Component {
    // this is a property coming from the Component class use this to define model state of the class
    state = { albums: [] };

    // life cycle method for classes extending Component
    componentDidMount() {
        console.log('component did mount is called');
        axios.get('https://rallycoding.herokuapp.com/api/music_albums/').then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        // here propAlbum captures the object that we want pass to AlbumDetail, so in order to use this at the AlbumDetail class use the same propAlbum  
        return this.state.albums.map(album => <AlbumDetail key={album.title} propAlbum={album} />);
    }

    // Automatically called when implemented while any UI is rendered on to the screen
    render() {
        console.log(this.state);
        return (<ScrollView>
            {this.renderAlbums()}
            </ScrollView>);
    }
}

export default AlbumsList;
