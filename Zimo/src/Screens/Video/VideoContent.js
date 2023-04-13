//import liraries
import React, { useState, useEffect } from 'react';
import { View, Image, StatusBar, Text, TouchableHighlight } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import VideoPlayer from 'react-native-video-player'
import Video from 'react-native-video'
import Orientation from 'react-native-orientation-locker';
import styles from './style';



const VideoContent = () => {

    const [show, setshow] = useState(true);
    const [fullscreen, setFullscreen] = useState(false);

    const videoRef = React.createRef();
    useEffect(() => {
        Orientation.addOrientationListener(handleOrientation);
        return () => {
            Orientation.removeOrientationListener(handleOrientation);
        };
    }, []);

    const handleOrientation = orientation => {
        if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
            setFullscreen(true);
            StatusBar.setHidden(true);
        } else {
            setFullscreen(false);
            StatusBar.setHidden(false);
        }
    };
    const handleclick = () => {
        setshow(!show)
    }

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor='transparent' />
            {
                show ?
                    <View style={styles.head_container}>
                        <View style={{ marginTop: moderateScale(23), marginHorizontal: moderateScale(10), }}>
                            <Image source={require('../../Assets/arrow_back.png')} tintColor="white" />
                        </View>
                        <View style={{ marginTop: 23, }}>
                            <Image source={require('../../Assets/logo_black.jpg')} style={styles.head_logo} />
                        </View>
                        <View style={styles.head_rightIcon} >
                            <View >
                                <Image source={require('../../Assets/forward.png')} tintColor="white" />

                            </View>
                            <View style={{ marginHorizontal: moderateScale(10), }}>
                                <Image source={require('../../Assets/favorite.png')} tintColor="red" />

                            </View>
                        </View>
                    </View>
                    :
                    ""
            }


            <View style={styles.videocontainer} >
                <TouchableHighlight activeOpacity={1} onPress={handleclick}>

                    <Video
                        ref={videoRef}
                        source={{
                            uri:
                                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
                        }}
                        resizeMode='contain'
                        // controls={true}
                        style={fullscreen ? styles.fullscreenVideo : styles.video}
                    />

                </TouchableHighlight>
                {
                    show ?

                        <View style={fullscreen ? styles.bottom_view_landscape : styles.bottom_view_potrait}>

                            <View style={styles.bottom_text_view}>
                                <Text style={styles.bottomtext}>SHELTON STREET</Text>
                                <Text style={styles.bottomtext}>COVENT GARDEN</Text>
                                <Text style={styles.bottomtext}>LONDON</Text>
                                <Text style={styles.bottomtext}>WC2H</Text>
                                <Text style={styles.bottomtext}>UNITED KINGDOM</Text>
                            </View>

                            <View>
                                <Text style={styles.bottom_price_text}>£5,000,000 GBP</Text>
                                <Text style={fullscreen ? styles.bottom_end_text_landscape : styles.bottom_end_text_potrait}>#ZM7861234567</Text>
                            </View>

                        </View>
                        :
                        ""
                }
            </View>

        </View>
    );
};

export default VideoContent;
