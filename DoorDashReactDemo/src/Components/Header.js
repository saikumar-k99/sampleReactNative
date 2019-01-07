// info: Header is a single lable view 

// import needed libraries 
import React from 'react';
import { Text, View } from 'react-native';

// create the component
const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (<View style={viewStyle}> 
     <Text style={textStyle}>Restaurants</Text>
     </View>);
 };

const styles = {
    textStyle: {
        //Styles use camel case instead of - notation as in CSS
        fontSize: 80
    },
    viewStyle: {
        //Styles for the view which is a superview for the Header text
        backgroundColor: '#FF0000'
    }
};

// make it available for rest of the app to use it to render on the screen
export default Header;
