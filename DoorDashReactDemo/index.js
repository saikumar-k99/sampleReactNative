// Import a library to help create a component(like a view or content)
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a component
const App = ()=> {
    return (<Text>Hello World
        </Text>);
};

// Render it to the device
ReactNative.AppRegistry.registerComponent('DOORDASHREACTDEMO', () => App)