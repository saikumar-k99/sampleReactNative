import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Use this initializer type parameter as a function type by using {}
const CardButton = ({ handlerMethod }) => { 
    const { buttonStyle, buttonTextStyle } = styles;

    return (
    <TouchableOpacity onPress={handlerMethod} style={buttonStyle}>
        <Text style={buttonTextStyle}>Click Here to Buy!! </Text>
    </TouchableOpacity>
    );
};

    const styles = {
        buttonTextStyle: {
            alignSelf: 'center',
            color: '#007aff',
            fontSize: 16,
            fontWeight: '600',
            paddingTop: 10,
            paddingBottom: 10
        },

        buttonStyle: {
            flex: 1,
            alignSelf: 'stretch',
            backgroundColor: '#fff',
            borderColor: '#007aff',
            borderRadius: 5,
            borderWidth: 1,
            marginLeft: 5,
            marginRight: 5
        }
    };

export default CardButton;
