import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const AlbumDetail = (props) => {
    return (
    <Card> 
        <Text>{props.propAlbum.title}</Text>
    </Card>
    );
};

export default AlbumDetail;
