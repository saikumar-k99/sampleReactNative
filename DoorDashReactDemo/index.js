// Import a library to help create a component(like a view or content)
// use this kind of import for packages installed through npm
import React from 'react';
import { AppRegistry, View } from 'react-native';
// import any components that we create to reuse
import Header from './src/Components/Header';
import AlbumsList from './src/Components/AlbumList';

// Create a component
// returns the JSX in the below funciton
const App = () => (<View>
    <Header headerText={'Restaurants'} />
    <AlbumsList />
</View>);

// Render it to the device
AppRegistry.registerComponent('DoorDashReactDemo', () => App);
