//import liraries
import React, { useState, useEffect } from 'react';
import { View, Image, StatusBar, Dimensions, TouchableHighlight } from 'react-native';
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
                        controls={true}
                        style={fullscreen ? styles.fullscreenVideo : styles.video}
                    />
                    {/* <VideoPlayer
                        controlsTimeout={5000}
                        showDuration={true}
                        // defaultMuted
                        // autoplay
                        // disableSeek
                        // source={{
                        //     uri:
                        //         'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
                        // }}
                        video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' }}
                        // videoWidth={1600}
                        // videoHeight={900}
                    thumbnail={{ uri: 'https://i.picsum.photos/id/866/1600/900.jpg' }}
                    /> */}

                </TouchableHighlight>
            </View>
        </View>
    );
};

export default VideoContent;
