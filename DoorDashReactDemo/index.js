// Import a library to help create a component(like a view or content)
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = () => (<Text>Hello World</Text>);

// Render it to the device
AppRegistry.registerComponent('DoorDashReactDemo', () => App);
