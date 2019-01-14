import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const CardButton = () => { 
    const { buttonStyle, buttonTextStyle } = styles;

    return (
    <TouchableOpacity style={buttonStyle}>
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
