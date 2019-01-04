// Import a library to help create a component(like a view or content)
// use this kind of import for packages installed through npm
import React from 'react';
import { AppRegistry } from 'react-native';
// import any components that we create to reuse
import Header from './src/Components/Header';

// Create a component
// returns the JSX in the below funciton
const App = () => (<Header />);

// Render it to the device
AppRegistry.registerComponent('DoorDashReactDemo', () => App);
