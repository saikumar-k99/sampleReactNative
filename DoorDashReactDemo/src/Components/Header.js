// info: Header is a single lable view 

// import needed libraries 
import React from 'react';
import { Text, View } from 'react-native';

// create the component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    // Below is the JSX code that will returnt the layout for rendering purpose
    return (<View style={viewStyle}> 
     <Text style={textStyle}>{props.headerText}</Text>
     </View>);
 };

const styles = {
    textStyle: {
        //Styles use camel case instead of - notation as in CSS
        fontSize: 20,
        color: '#FF0000'
    },

    viewStyle: {
        //Styles for the view which is a superview for the Header text
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 20,
        shadowColor: '',
        shadowOffset: { width: 0, height: 2.0 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
};

// make it available for rest of the app to use it to render on the screen
export default Header;
