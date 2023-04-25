import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from './style';


const PlayerControls = props => {
    const { playing, onPlay, onPause, fullscreen } = props;

    return (
        <View style={styles.Control_wrapper}>

            <TouchableOpacity
            activeOpacity={0.7}
                style={styles.touchable}
                onPress={playing ? onPause : onPlay}>
                {playing ? (
                    <Image source={require('../../Assets/pause.png')} tintColor="white" />
                ) : (
                    <Image source={require('../../Assets/play.png')} tintColor="white" />
                )}
            </TouchableOpacity>
        </View>
    );
};


export default PlayerControls;