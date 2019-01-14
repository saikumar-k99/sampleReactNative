import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ propAlbum }) => {
    const { title, artist, thumbnail_image } = propAlbum;
    const { thumbnailStyle, 
            headerContentStyles, 
            thumbnailContainerStyle,
            headerTextStyle } = styles;

    return (
    <Card> 
        <CardSection>
        {/* add an image and two text labels side to image which are aligned vertically */
        /*to do that create two views, one for image and one for the two labels and use flex box to place them side by side */} 
            <View style={thumbnailContainerStyle}> 
            <Image 
            source={{ uri: thumbnail_image }} 
            style={thumbnailStyle}    
            />
            </View>

            <View style={headerContentStyles}> 
                <Text style={headerTextStyle}>{title}</Text>
                <Text>{artist}</Text>
            </View>
        </CardSection>
    </Card>
    );
};

const styles = {
    headerContentStyles: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },

    thumbnailStyle: {
        height: 50,
        width: 50
    },

    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },

    headerTextStyle: {
        fontSize: 18
    },

    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumDetail;
