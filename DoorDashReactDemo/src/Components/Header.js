// info: Header is a single lable view 

// import needed libraries 
import React from 'react';
import { Text } from 'react-native';

// create the component
const Header = () => {
    const { textStyle } = styles;

    return <Text style={textStyle}>Restaurants</Text>;
 };

const styles = {
    textStyle: {
        //Styles use camel case instead of - notation as in CSS
        fontSize: 80
    }
};

// make it available for rest of the app to use it to render on the screen
export default Header;
