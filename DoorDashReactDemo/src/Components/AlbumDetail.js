import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ propAlbum }) => {
    const { title, artist, thumbnail_image } = propAlbum;
    const { thumbnailStyle, headerContentStyles } = styles;

    return (
    <Card> 
        <CardSection>
        {/* add an image and two text labels side to image which are aligned vertically */
        /*to do that create two views, one for image and one for the two labels and use flex box to place them side by side */} 
            <View> 
            <Image 
            source={{ uri: thumbnail_image }} 
            style={thumbnailStyle}    
            />
            </View>
            <View style={headerContentStyles}> 
                <Text>{title}</Text>
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
    }
};

export default AlbumDetail;
